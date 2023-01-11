'use strict'

import { NavBar } from '../model/navBar.js'
import { Email } from '../model/email.js';
import { Favicon } from '../model/favicon.js';

// navbar = new NavBar();
var emailDTO = new Email();
var favicon = new Favicon();



//let username = "tim"
//navbar.showUsername(username);

const formElement = document.getElementById('form');
// button is ook een tag en die willen we niet
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
        const emailDTO = new Email();
        emailDTO.firstname = document.getElementById('voornaam').value;
        emailDTO.lastname = document.getElementById('achternaam').value;
        emailDTO.to = document.getElementById('email').value;
        emailDTO.phone = document.getElementById('telefoonnummer').value;
        emailDTO.message = document.getElementById('message').value;
        emailDTO.subject = document.getElementById('onderwerp').value;
        sendEMail(emailDTO);
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

function sendEMail(EmailDTO) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(EmailDTO);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("http://localhost:8080/email/send", requestOptions)
        .then(r => r.json())
        .then(r => { 

            if (r.succes) {
                document.getElementById('header').innerHTML = "Email verzonden!"
                document.getElementById('formbutton').innerHTML = "Verstuur nog een email"
            } else {
                console.log(r.validaties);
                alert("Email verzenden mislukt")
            }
        })
        .catch(error => console.log('error', error));
}

