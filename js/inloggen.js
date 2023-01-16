import { NavBar } from '../model/navBar.js'

var navbar = new NavBar();
const formElement = document.getElementById('form');
console.log(formElement);

formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // formElements.forEach(element => {
    //     checkValidity(element);
    // });  

    maakAccountAan()
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

    fetch("http://localhost:8080/klanten/inloggen", requestOptions)
        .then(response => response.json())
        .then(r => {

            if (r.validaties == null) {
                console.log("ingelogd!")
                localStorage.setItem("response", JSON.stringify(r));
                navbar.showUsername();
            } else {
                console.log("else");
                r.validaties.forEach(validatie => {
                    alert(validatie);
                });
            }
        })
        .catch(error => console.log('error', error));
}

