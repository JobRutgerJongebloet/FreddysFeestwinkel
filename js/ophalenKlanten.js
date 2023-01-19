import { Bootstrap } from '../model/bootstrap.js';
import { NavBar } from '../model/navBar.js'

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
const boostrap = new Bootstrap();

document.addEventListener('DOMContentLoaded', function () {
    let klanten = document.querySelector('#klanten');

    async function ophalenKlanten(url) {
        let data = await fetch(url);
        let response = await data.json();

        // console.log(data);
        // Product
        // for (let i = 0; i < response.length; i++) {
        //     console.log(response);

        //     klanten.innerHTML += `
        //         <tr class="align-middle">
        //             <td data-title="Naam">${response[i].naam}</td>
        //             <td data-title="Email">${response[i].email}</td>
        //             <td data-title="Adres">${response[i].adres}</td>
        //             <td data-title="Telefoonnummer">${response[i].telefoonnummer}</td>
        //             <td data-title="Bijwerken">
        //                 <button type="button" class="btn btn-success">
        //                     Bijwerken
        //                 </button>
        //             </td>
        //             <td data-title="Verwijderen">
        //                 <button type="button" class="btn btn-danger">
        //                     Verwijderen
        //                 </button>
        //             </td>
        //         </tr>`;

        // }
    };
    ophalenKlanten("http://localhost:8080/" + 'klanten/all')
});