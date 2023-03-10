'use strict'

import { NavBar } from '../models/navBar.js'
import { Email } from '../models/email.js';
import { Favicon } from '../models/favicon.js';
import { Footer } from '../models/footer.js'

var navbar = new NavBar();
var emailDTO = new Email();
var favicon = new Favicon();
var footer = new Footer();

let response = JSON.parse(localStorage.getItem("response"));
if (response != null) {
    navbar.updateNavBar();
}

const formElement = document.getElementById('form');
const inputElements = formElement.getElementsByTagName('input');
const textAreaElements = formElement.getElementsByTagName('textarea');
const formElements = [...inputElements, ...textAreaElements];

let formIsValid = true;

formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    formElements.forEach(element => {
        checkValidity(element);
    });

    if (formIsValid) {
        sendEMail();
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
    if (element.name === "telefoonnummer") {
        if (!element.value.match(/^\d+$/)) {
            var text = "Telefoonnummer moet uit alleen cijfer bestaan";
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

async function sendEMail() {
    const emailDTO = new Email();
    emailDTO.firstname = document.getElementById('voornaam').value;
    emailDTO.lastname = document.getElementById('achternaam').value;
    emailDTO.to = document.getElementById('email').value;
    emailDTO.phone = document.getElementById('telefoonnummer').value;
    emailDTO.message = document.getElementById('message').value;
    emailDTO.subject = document.getElementById('onderwerp').value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(emailDTO);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    try {
        const response = await fetch(baseURL + "email/send", requestOptions);
        const result = await response.json();
        if (result.succes) {
            document.getElementById('header2').innerHTML = "Email verzonden!";
            document.getElementById('formbutton').innerHTML = "Verstuur nog een email";
        } else {
            console.log(result.validaties);
            alert("Email verzenden mislukt");
        }
    } catch (error) {
        console.log('error', error);
    }
}