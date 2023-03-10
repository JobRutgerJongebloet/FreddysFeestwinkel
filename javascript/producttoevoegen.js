import { NavBar } from '../models/navBar.js'
import { Favicon } from '../models/favicon.js';

const navbar = new NavBar();
const favicon = new Favicon();

if (localStorage.getItem("response") != null) {
    let response = JSON.parse(localStorage.getItem("response"));
    if (response.role != "WINKELIER") {
        document.location.href = "/index.html";
    }
    navbar.updateNavBar();
}
else {
    document.location.href = "/index.html";
}

fetchCategorieen();
fetchFeestdagen();

const formElement = document.getElementById('form');

var formIsValid = false;

const inputElements = formElement.getElementsByTagName('input');
const textAreaElements = formElement.getElementsByTagName('textarea');
const selectElements = formElement.getElementsByTagName('select');
const formElements = [...inputElements, ...textAreaElements, ...selectElements];

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
            feestdag: document.getElementById('feestdagen').value,
            voorraad: parseFloat(document.getElementById('voorraad').value.replace(',', '.')),
            // Maakt van 100,00 -> 100 en van 80,34 -> 80.34
            kosten: parseFloat(document.getElementById('productkosten').value.replace(',', '.')),
            inkoop: parseFloat(document.getElementById('inkoopkosten').value.replace(',', '.'))
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
    myHeaders.append("Authentication", JSON.parse(localStorage.getItem("response")).randomstring);
    var raw = JSON.stringify(nieuwProduct);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch(baseURL + "product/toevoegen", requestOptions)
        .then(response => response.json())
        .then(r => {
            console.log(r);
            if (r.succes) {
                alert("product is toegevoegd!");
                document.location.href = "producten.html";
            } else {
                console.log(r.validaties);
                alert(r.validaties)
            }
        }
        )
        .catch(error => console.log('error', error));
}

async function fetchCategorieen() {
    try {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(baseURL + "product/categorieen", requestOptions);
        const result = await response.json();
        var select = document.getElementById("productcategorie");
        result.forEach(element => {
            select.options.add(new Option(element, element));
        });
    } catch (error) {
        console.log('error', error);
    }
}

async function fetchFeestdagen() {
    try {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(baseURL + "product/feestdagen", requestOptions);
        const result = await response.json();
        var select = document.getElementById("feestdagen");
        result.forEach(element => {
            select.options.add(new Option(element, element));
        });
    } catch (error) {
        console.log('error', error);
    }
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

