import { NavBar } from '../models/navBar.js'
import { Favicon } from '../models/favicon.js'
import { Footer } from '../models/footer.js'

const navbar = new NavBar();
const favicon = new Favicon();
const footer = new Footer();

const formElement = document.getElementById('form');
const inputElements = formElement.getElementsByTagName('input');
const formElements = [...inputElements];

let formIsValid = false;

formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    formElements.forEach(element => {
        checkValidity(element);
    });

    if (formIsValid) {
        maakAccountAan()
    }
});

formElements.forEach(element => {
    element.addEventListener("focus", () => removeValidity(element)); // wanneer het element gefocused wordt
    element.addEventListener("blur", () => checkValidity(element)); // wanneer het element uit focus gaat
});

function maakAccountAan() {
    var username = document.getElementById('email').value;
    var password = document.getElementById('wachtwoord').value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        username: username,
        password: password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(baseURL + "klanten/inloggen", requestOptions)
        .then(response => response.json())
        .then(r => {
            if (r.validaties == null) {
                alert("ingelogd!")
                localStorage.setItem("response", JSON.stringify(r));
                let response = JSON.parse(localStorage.getItem("response"));
                if (response != null) {
                    navbar.showUsername();
                    navbar.showRole();
                }
            } else {
                console.log("else");
                r.validaties.forEach(validatie => {
                    alert(validatie);
                });
            }
        })
        .catch(error => console.log('error', error));
}

function removeValidity(element) {
    if (element.classList.contains('is-invalid')) {
        element.classList.remove('is-invalid');
    }
    if (element.classList.contains('is-valid')) {
        element.classList.remove('is-valid');
    }
}

function checkValidity(element) {
    if (element.name === "email") {
        if (element.value.trim().match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
        ) == null) {
            var text = "Email moet abc@abc.com zijn";
            document.querySelector(`#${element.getAttribute('id')} + .invalid-feedback`).innerHTML = text;
            element.classList.add('is-invalid');
            formIsValid = false;
        }
    }
    if (element.value.trim() === "") {
        var text = element.name.replace(/^\w/, c => c.toUpperCase()) + " is een verplicht veld";
        document.querySelector(`#${element.getAttribute('id')} + .invalid-feedback`).innerHTML = text;
        element.classList.add('is-invalid');
        formIsValid = false;
    } else {
        element.classList.add('is-valid');
        formIsValid = true;
    }
}
