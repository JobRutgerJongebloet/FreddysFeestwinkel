"use strict";
import { Bootstrap } from '../model/bootstrap.js';
import { Favicon } from '../model/favicon.js';
// import { NavBar } from '../model/navBar.js'
import { JQuery } from '../model/jQuery.js'
import { Font } from '../model/font.js';
import { Email } from '../model/email.js';

class ContactController {

    constructor() {
        this.jQuery = new JQuery();
        this.initForm();
        this.bootstrap = new Bootstrap();
        // this.navbar = new NavBar();
        this.favicon = new Favicon();
        this.font = new Font();
        console.log("hoi");
    }
    
    initForm() {
        var name = document.querySelector('.validate-input input[name="name"]');
        var email = document.querySelector('.validate-input input[name="email"]');
        var subject = document.querySelector('.validate-input input[name="subject"]');
        var message = document.querySelector('.validate-input textarea[name="message"]');

        document.querySelector('.validate-form').addEventListener('submit', (evt) => {
            evt.preventDefault();

            var check = true;

            if (name.value.trim() === "") {
                this.showValidate(name);
                check = false;
            }

            if (subject.value.trim() === "") {
                this.showValidate(subject);
                check = false;
            }

            if (email.value.trim().match(
                /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
            ) == null) {
                this.showValidate(email);
                check = false;
            }
            if (message.value.trim() === "") {
                this.showValidate(message);
                check = false;
            }

            var inputs = document.querySelectorAll(".validate-form .input");
            for (var i = 0; i < inputs.length; i++) {
                var input = inputs[i];
                input.addEventListener("focus", function () {
                    if (input.value !== null) {
                        this.hideValidate(input.value);
                    }
                });
            }

            if (check === true) {

                const emailDTO = new Email();
                emailDTO.name = name.value;
                emailDTO.to = email.value;
                emailDTO.message = message.value;
                emailDTO.subject = subject.value;

                this.sendEMail(emailDTO);
            }
        });
    }

    showValidate(input) {
        var thisAlert = input.parentNode;
        thisAlert.classList.add("alert-validate");
    };

    hideValidate(input) {
        var thisAlert = input.parentNode;
        thisAlert.classList.remove("alert-validate");
    }

    sendEMail(EmailDTO) {
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
            .then(response => response.text())
            .then(result => {

                let response = JSON.parse(result);

                if (response.succes) {
                    const form = document.querySelector('.contact-form');
                    form.parentNode.removeChild(form);

                    const message = document.createElement('div');
                    message.classList.add('contact-form-success');
                    message.textContent = 'Email verstuurd!';
                    document.querySelector('.container-contact').appendChild(message);
                } else {
                    console.log(response.validaties);
                    alert("Email verzenden mislukt")
                }
            })
            .catch(error => console.log('error', error));
    }
}
const contactController = new ContactController();