import { NavBar } from '../model/navBar.js'
import { Favicon } from '../model/favicon.js';

var navbar = new NavBar();
var favicon = new Favicon();

let response = JSON.parse(localStorage.getItem("response"));
if (response != null) {
    navbar.showUsername();
    navbar.showRole();
}
haalProductenOp();


let winkelwagen = {};
let winkelwagenProucten = [];


document.getElementById('bestelbutton').addEventListener('click', (evt) => {
    bestel();
});

function bestel() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authentication", JSON.parse(localStorage.getItem("response")).randomstring);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/winkelwagen/bestellen", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function updateWinkelmand() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authentication", JSON.parse(localStorage.getItem("response")).randomstring);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/winkelwagen/klant", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            let totaalElement = document.getElementById("totaalprijs");
            let totaal = 0;
            totaalElement.innerHTML = `Totale prijs: € ` + totaal;

            let container = document.getElementById("inhoudww");

            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            for (let i = 0; i < result.winkelwagen.length; i++) {
                let product = document.createElement("div");
                product.innerHTML = "Product Naam:&nbsp;" + result.winkelwagen[i][0].naam + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prijs: " + result.winkelwagen[i][0].kosten
                    + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aantal: " + result.winkelwagen[1][1] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Totaal " + result.winkelwagen[1][1] * result.winkelwagen[i][0].kosten;
                document.getElementById("inhoudww").appendChild(product);
                totaal = totaal + result.winkelwagen[1][1] * result.winkelwagen[i][0].kosten;
            }
            totaalElement.innerHTML = `Totale prijs: € ` + totaal;
        })
        .catch(error => console.log('error', error));
}

async function haalProductenOp() {
    try {
        const response = await fetch(baseURL + 'producten');
        const lijst = await response.json();
        let producten = document.getElementById("product");
        for (let d of lijst) {
            let quantity = 0;
            if (winkelwagen.hasOwnProperty(d.naam)) {
                quantity = winkelwagen[d.naam];
            }
            let img = "https://www.feestkleding.nl/media/catalog/product/cache/c9804476f3bdaad700372bd35abce089/fk/g/r/grote-clownsneuzen-rood-12x-0.jpg";
            producten.innerHTML +=
                `<div class="col-sm-3 mt-3">
                <div class="card"> <img src=${img} class="card-img-top" translate-middle alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${d.naam}</h5>
                        <p class="card-text">${d.omschrijving}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Categorie: ${d.categorie}</li>
                        <li class="list-group-item">Prijs per stuk €${d.kosten}</li>
                    </ul> 
                    <a data-param="${d.id}" id="addtocart" class="btn btn-success">Toevoegen aan winkelwagen</a> 
                    <a data-param="${d.id}" id="removefromcart" class="btn btn-danger">Verwijder uit winkelwagen</a> 
                    <span class="cart-quantity" id="quantity-${d.id}"></span>
                </div>
            </div>`
        }
        const addLinks = document.querySelectorAll("#addtocart");
        addLinks.forEach(function (addLink) {
            addLink.addEventListener("click", function (e) {
                const productid = this.getAttribute("data-param");
                toevoegenAanWinkelwagen(productid);
            });
        });
        const removeLinks = document.querySelectorAll("#removefromcart");
        removeLinks.forEach(function (removeLink) {
            removeLink.addEventListener("click", function (e) {
                const productid = this.getAttribute("data-param");
                verwijderenUitWinkelwagen(productid);
            });
        });
    } catch (error) {
        console.error(error);
    }
}

function toevoegenAanWinkelwagen(productId) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authentication", JSON.parse(localStorage.getItem("response")).randomstring);

    var raw = JSON.stringify({
        "productId": productId
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(baseURL + "winkelwagen/product/toevoegen", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            updateWinkelmand();
        })
        .catch(error => console.log('error', error));
}

function verwijderenUitWinkelwagen(productid) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authentication", JSON.parse(localStorage.getItem("response")).randomstring);

    var raw = JSON.stringify({
        "productId": productid
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(baseURL + "winkelwagen/product/verwijderen", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            updateWinkelmand();
        })
        .catch(error => console.log('error', error));
    // fetch(baseURL + 'product/' + productid)
    //     .then(response => response.json())
    //     .then(product => {
    //         console.log(product.naam + " " + "is verwijderd uit winkelwagen");
    //         if (winkelwagen.hasOwnProperty(product.naam)) {
    //             if (winkelwagen[product.naam].aantal > 1) {
    //                 winkelwagen[product.naam].aantal -= 1;
    //                 winkelwagen[product.naam].subtotal -= product.subtotal;
    //             } else {
    //                 delete winkelwagen[product.naam];
    //             }
    //         }
    //         console.log(winkelwagen);
    //         let inhoudww = document.getElementById("inhoudww");
    //         let winkelwagenInhoud = '';
    //         let totaalprijs = 0;
    //         for (let key in winkelwagen) {
    //             winkelwagenInhoud += `${winkelwagen[key].aantal} x ${key} : € ${winkelwagen[key].subtotal} <br>`
    //             totaalprijs += winkelwagen[key].subtotal;
    //         }
    //         inhoudww.innerHTML = winkelwagenInhoud;
    //         let totaalElement = document.getElementById("totaalprijs");
    //         totaalElement.innerHTML = `Totaalprijs: € ${totaalprijs}`;
    //         let quantityElement = document.getElementById("quantity-" + productid);
    //         if (winkelwagen.hasOwnProperty(product.naam)) {
    //             quantityElement.innerHTML = winkelwagen[product.naam].aantal;
    //         } else {
    //             quantityElement.innerHTML = 0;
    //         }
    //     })
}

// function updateWinkelwagenInhoud() {
// let inhoudww = document.getElementById("inhoudww");
// let winkelwagenInhoud = '';
// for (let key in winkelwagen) {
//     winkelwagenInhoud += `${winkelwagen[key]} x ${key} <br>`
// }
// inhoudww.innerHTML = winkelwagenInhoud;
// }
