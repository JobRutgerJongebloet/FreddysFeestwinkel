import { NavBar } from '../models/navBar.js'
import { Favicon } from '../models/favicon.js'
import { Footer } from '../models/footer.js'

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
const footer = - new Footer();

navbar.showUsername();
navbar.showRole();

ophalenKlanten();

async function ophalenKlanten() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authentication", JSON.parse(localStorage.getItem("response")).randomstring);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    try {
        const response = await fetch(baseURL + "klanten/all", requestOptions);
        const result = await response.json();

        console.log(result);
        let container = document.getElementById("klanten");

        console.log(container);
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        for (let i = 0; i < result.length; i++) {
            console.log("test");
            const footer = document.createElement('tr');
            container.appendChild(footer, container.firstChild);
            footer.innerHTML = 
            `
                    <td data-title="Naam">${result[i].naam}</td>
                    <td data-title="Email">${result[i].email}</td>
                    <td data-title="Adres">${result[i].adres}</td>
                    <td data-title="Telefoonnummer">${result[i].telefoonnummer}</td>
                    <td data-title="Bijwerken">
                        <button type="button" class="btn btn-success">
                            Bijwerken
                        </button>
                    </td>
                    <td data-title="Verwijderen">
                        <button type="button" class="btn btn-danger">
                            Verwijderen
                        </button>
                    </td>
                `;
        }

    } catch (error) {
        console.log('error', error);
    }
}