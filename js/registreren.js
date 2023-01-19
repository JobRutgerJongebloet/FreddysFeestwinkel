import { NavBar } from '../model/navBar.js'
import { Favicon } from '../model/favicon.js'

const navbar = new NavBar();
const favicon = new Favicon();

let response = JSON.parse(localStorage.getItem("response"));
if (response != null) {
    navbar.showUsername();
    navbar.showRole();
}

const formElement = document.getElementById('registerForm');
const inputElements = formElement.getElementsByTagName('input');
const formElements = [...inputElements];

let formIsValid = true;

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
    // Validate if "invoerWachtwoord" & "invoerBevestigWachtwoord" are the same
    if (element.name === "wachtwoord") {
        var bevestigingswachtwoord = document.getElementById('bevestigWachtwoord').value
        if (element.value == bevestigingswachtwoord.value) {
            var text = "Wachtwoord gelijk zijn";
            document.querySelector(`#${bevestigingswachtwoord.getAttribute('id')} + .invalid-feedback`).innerHTML = text;
            document.querySelector(`#${element.getAttribute('id')} + .invalid-feedback`).innerHTML = text;
            bevestigingswachtwoord.classList.add('is-invalid');
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

let register = document.getElementById("registerForm");

function registerUser() {

    // Getting the values from the inputs
    let invoerNaam = document.getElementById('naam').value;
    let invoerEmail = document.getElementById('email').value;
    let invoerWachtwoord = document.getElementById('wachtwoord').value;
    let invoerBevestigWachtwoord = document.getElementById('bevestigWachtwoord').value;

    // New object
    let nieuweKlant = {
        naam: invoerNaam,
        email: invoerEmail,
        password: wachtwoordValideerd,
    }

    // Converting an object to JSON
    data = JSON.stringify(nieuweKlant);
    params = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    }

    // HTTP POST request
    fetch("http://localhost:8080/klant/registreren", params)
        .then((data) => console.log(data))

}
