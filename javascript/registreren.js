import { NavBar } from '../models/navBar.js'
import { Favicon } from '../models/favicon.js'
import { Footer } from '../models/footer.js'

const navbar = new NavBar();
const favicon = new Favicon();
const footer = new  Footer();

let response = JSON.parse(localStorage.getItem("response"));
if (response != null) {
    navbar.updateNavBar();        
}

const formElement = document.getElementById('registerForm');
const inputElements = formElement.getElementsByTagName('input');
const formElements = [...inputElements];

let formIsValid = false;

formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    formElements.forEach(element => {
        checkValidity(element);
    });

    if (formIsValid) {
        registerUser();
    }
});

formElements.forEach(element => {
    element.addEventListener("focus", () => removeValidity(element)); // wanneer het element gefocused wordt
    element.addEventListener("blur", () => checkValidity(element)); // wanneer het element uit focus gaat
});

function removeValidity(element) {
    if (element.name === "wachtwoord") {
        const ttt = document.getElementById('bevestigwachtwoord');
        if (ttt.classList.contains('is-invalid')) {
            ttt.classList.remove('is-invalid');
        }
        if (ttt.classList.contains('is-valid')) {
            ttt.classList.remove('is-valid');
        }
    }
    if (element.name === "bevestigwachtwoord") {
        const ttt = document.getElementById('wachtwoord');
        if (ttt.classList.contains('is-invalid')) {
            ttt.classList.remove('is-invalid');
        }
        if (ttt.classList.contains('is-valid')) {
            ttt.classList.remove('is-valid');
        }
    }
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
    if (element.name === "telefoonnummer") {
        if (!element.value.match(/^\d+$/)) {
            var text = "Telefoonnummer moet uit alleen cijfer bestaan";
            document.querySelector(`#${element.getAttribute('id')} + .invalid-feedback`).innerHTML = text;
            element.classList.add('is-invalid');
            formIsValid = false;
        }
    }
    if (element.name === "wachtwoord") {
        if (element.value.length < 8) {
            var text = "Wachtwoord moet minimaal 8 tekens bevatten";
            document.querySelector(`#${element.getAttribute('id')} + .invalid-feedback`).innerHTML = text;
            element.classList.add('is-invalid');
            formIsValid = false;
        }
    }
    if (element.name === "bevestigwachtwoord") {
        if (element.value.length < 8) {
            var text = "Wachtwoord moet minimaal 8 tekens bevatten";
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
    }

    if (element.name === "bevestigwachtwoord") {
        var wachtwoord = document.getElementById('wachtwoord');
        if (!element.value === wachtwoord.value) {
            var text = "Wachtwoorden moeten gelijk zijn";
            document.querySelector(`#${wachtwoord.getAttribute('id')} + .invalid-feedback`).innerHTML = text;
            document.querySelector(`#${element.getAttribute('id')} + .invalid-feedback`).innerHTML = text;
            wachtwoord.classList.add('is-invalid');
            element.classList.add('is-invalid');
            formIsValid = false;
        }else{
            element.classList.add('is-valid');
            wachtwoord.classList.add('is-valid');
            formIsValid = true;
            return
        }
    } else {
        element.classList.add('is-valid');
        formIsValid = true;
    }
}

function registerUser() {

    // Getting the values from the inputs
    let naamValue = document.getElementById('naam').value;
    let emailValue = document.getElementById('email').value;
    let adresValue = document.getElementById('adres').value;
    let telefoonnummerValue = document.getElementById('telefoonnummer').value
    let wachtwoordValideerd = document.getElementById('bevestigwachtwoord').value;

    // New object
    let nieuweKlant = {
        naam: naamValue,
        adres: adresValue,
        email: emailValue,
        password: wachtwoordValideerd,
        telefoonnummer: telefoonnummerValue,
        shippingInfo: adresValue
    }

    // Converting an object to JSON
    var data = JSON.stringify(nieuweKlant);
    var requestOptions = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    }

    // HTTP POST request
    fetch(baseURL + "klant/registreren", requestOptions)
    .then(response => response.json())
    .then(r => {

        console.log(r);
        if (r.succes) {
            alert("Account is toegevoegd!");
        } else {
            console.log(r.validaties);
            alert("Mislukt want " + r.validaties)
        }
    }

    )
    .catch(error => console.log('error', error));
}
