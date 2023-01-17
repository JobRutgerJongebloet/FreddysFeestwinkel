import { NavBar } from '../model/navBar.js'
import { Favicon } from '../model/favicon.js';

if (localStorage.getItem("response") != null) {
    let response = JSON.parse(localStorage.getItem("response"));
    if (response.role != "WINKELIER") {
        document.location.href = "/index.html";
    }
}
else {
    document.location.href = "/index.html";
}

const navbar = new NavBar();
const favicon = new Favicon();

const formElement = document.getElementById('form');

var formIsValid = false;

// button is ook een tag en die willen we niet
const inputElements = formElement.getElementsByTagName('input');
const textAreaElements = formElement.getElementsByTagName('textarea');
const selectElements = formElement.getElementsByTagName('select');
const formElements = [...inputElements, ...textAreaElements, ...selectElements];

document.getElementById("productnaam").focus();

formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    formElements.forEach(element => {
        checkValidity(element);
    });

    if (formIsValid) {
        let nieuwProduct = {
            naam: document.getElementById('productnaam').value,
            beschrijving: document.getElementById('productbeschrijving').value,
            categorie: document.getElementById('productcategorie').value,
            // Maakt van 100,00 -> 100 en van 80,34 -> 80.34
            kosten: parseFloat(document.getElementById('productkosten').value.replace(',', '.'))
        }

        maakProductAan(nieuwProduct);
    }

});

formElements.forEach(element => {
    element.addEventListener("focus", () => removeValidity(element)); // wanneer het element gefocused wordt
    element.addEventListener("blur", () => checkValidity(element)); // wanneer het element uit focus gaat
});
// functie aanmaken 
function maakProductAan(nieuwProduct) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(nieuwProduct);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("http://localhost:8080/product/aanmaken", requestOptions)
        .then(response => response.json())
        .then(r => {

            console.log(r);
            if (r.succes) {
                alert("product is toegevoegd!");
                document.location.href = "product.html";
            } else {
                console.log(r.validaties);
                alert("Mislukt want " + r.validaties)
            }
        }

        )
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
    if (element.name === "kosten") {
        if (!element.value.match(/^\d+(\.\d+)?$/)) {
            var text = element.name.replace(/^\w/, c => c.toUpperCase()) + " moet uit alleen cijfers bestaan";
            document.querySelector(`#${element.getAttribute('id')} + .invalid-feedback`).innerHTML = text;
            element.classList.add('is-invalid');
            formIsValid = false;
        }

        if (element.value > 10000) {
            var text = element.name.replace(/^\w/, c => c.toUpperCase()) + " moet kleiner zijn dan 10000";
            document.querySelector(`#${element.getAttribute('id')} + .invalid-feedback`).innerHTML = text;
            element.classList.add('is-invalid');
            formIsValid = false;

            element.value.split()
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

