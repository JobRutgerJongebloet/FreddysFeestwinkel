import { NavBar } from '../model/navBar.js'
import { Favicon } from '../model/favicon.js'

const navbar = new NavBar();
const favicon = new Favicon();

let response = JSON.parse(localStorage.getItem("response"));
if(response != null){
    navbar.showUsername();
    navbar.showRole();
}

const formElement = document.getElementById('form');
const inputElements = formElement.getElementsByTagName('input');
const formElements = [...inputElements];
console.log(formElements);

let formIsValid = false;

formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    formElements.forEach(element => {
        checkValidity(element);
    });  

    if(formIsValid){
        maakAccountAan()
    } 
});

formElements.forEach(element => {
    element.addEventListener("focus", () => removeValidity(element)); // wanneer het element gefocused wordt
    element.addEventListener("blur", () => checkValidity(element)); // wanneer het element uit focus gaat
});

function maakAccountAan() {
    var username = document.getElementById('gebruikersnaam').value;
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
                console.log("U bent ingelogd!")
                localStorage.setItem("response", JSON.stringify(r));
                document.location.href = "/view/inloggen.html";
            } else {
                alert("Gebruikersnaam of password is incorrect!");
                r.validaties.forEach(validatie => {
                    alert(validatie);
                });
            }
        })
        .catch(error => console.log('error', error));
}


