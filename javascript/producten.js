import { NavBar } from '../models/navBar.js'
import { Favicon } from '../models/favicon.js';
import { Footer } from '../models/footer.js';

var navbar = new NavBar();
var favicon = new Favicon();
var footer = new Footer();

let response = JSON.parse(localStorage.getItem("response"));
if (response != null) {
    navbar.showUsername();
    navbar.showRole();
    if (response.role == "KLANT") {
        updateWinkelmand();
    }
}

ophalenFavorieten();
haalProductenOp();

document.getElementById('bestelbutton').addEventListener('click', (evt) => {
    bestel();
});

async function ophalenFavorieten() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authentication", JSON.parse(localStorage.getItem("response")).randomstring);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    try {
        const response = await fetch(baseURL + "klant/favorieten", requestOptions);
        const result = await response.json();
        console.log(result);
        result.forEach(function (element) {
            const cardElement = document.getElementById(element.id);
            const faviconElement = cardElement.querySelector("#favoriteIcon");
            if (faviconElement.classList.contains('fa-regular')) {
                faviconElement.classList.remove('fa-regular');
                faviconElement.classList.add('fa-solid');
            }
        })
    } catch (error) {
        console.log('error', error);
    }
}

function bestel() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authentication", JSON.parse(localStorage.getItem("response")).randomstring);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(baseURL + "winkelwagen/bestellen", requestOptions)
        .then(response => response.text())
        .then(result => alert("Bestelling geplaatst"))
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

    fetch(baseURL + "winkelwagen/klant", requestOptions)
        .then(response => response.json())
        .then(result => {

            var subtotaal = 0;
            var totaal = 0;
            let container = document.getElementById("inhoudww");

            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

            for (let i = 0; i < result.winkelwagen.length; i++) {

                let tr = document.createElement("tr");
                container.appendChild(tr, container.firstChild);
                totaal = result.winkelwagen[i][1] * result.winkelwagen[i][0].kosten;
                subtotaal += result.winkelwagen[i][1] * result.winkelwagen[i][0].kosten;
                tr.innerHTML =
                tr.innerHTML =
                `
                
                <td data-title="Product">${result.winkelwagen[i][0].naam}</td>
                <td data-title="Prijs">€ ${result.winkelwagen[i][0].kosten}</td>
                <td data-title="Hoeveelheid">${result.winkelwagen[i][1]}</td>
                <td data-title="Totaal">€ ${totaal}</td>
                <td data-title="Verwijder">
                <div class="btn-group">
                   <button class="btn btn-success add-btn">+</button>
                   <button class="btn btn-danger delete-btn">-</button>
                </div>
             </td>
             
                `
                let addButtons = document.querySelectorAll('.add-btn');

for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', toevoegenAanWinkelwagen);
}
let removeButtons = document.querySelectorAll('.delete-btn');

for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', verwijderenUitWinkelwagen);
}

            
;



            }
            let totaalElement = document.getElementById("totaalprijs");
            totaalElement.innerHTML = `Totale prijs: € ` + subtotaal;
        })
        .catch(error => console.log('error', error));
}

async function haalProductenOp() {
    try {
        const response = await fetch(baseURL + 'producten');
        const lijst = await response.json();
        let producten = document.getElementById("product")
        let img = "";
        for (let d of lijst) {
            let img = "https://random.imagecdn.app/500/600";
            if (d.categorie == "Schmink") {
                img = "../images/products/schmink.jpg";
            }
            if (d.categorie == "Sintartikelen") {
                img = "../images/products/sintstaf.jpg";
            }
            if (d.categorie == "Feestaccesoires") {
                img = "../images/products/rodefeestneus.jpg";
            }
            if (d.categorie == "Feestkleding") {
                img = "../images/products/halloweenghostcostume.jpg";
            }
            producten.innerHTML +=
                `   
                <div class="col-md-3 p-4">
				<div class="card" style="background-color: inherit; id="${d.id}">
					<img src=${img} class="card-img-top" style="height: 300px" translate-middle alt="...">
					<i data-param="${d.id}" id="favoriteIcon" class="link__icon icon fa-regular fa-heart"></i>
					<h5 class="card-title text-center fst-bolder fs-4">${d.naam}</h5>
					

					<ul class="list-group list-group-flush">
						
						<li class="list-group-item text-center text-success fw-bolder " >€${d.kosten}</li>
					</ul>
					<a data-param="${d.id}" id="addtocart" class="btn btn-success btn-sm rounded-pill">In winkelwagen</a>
					<a data-param="${d.id}" id="removefromcart" class="btn btn-danger btn-sm rounded-pill">Uit winkelwagen</a>
				</div>
			</div>
                `
        }
        const cardElement = document.querySelectorAll(".card");
        cardElement.forEach(function (element) {
            const addLink = element.querySelector("#addtocart");
            addLink.addEventListener("click", function (e) {
                const productid = this.getAttribute("data-param");
                toevoegenAanWinkelwagen(productid);
            });
            const removeLink = element.querySelector("#removefromcart");
            removeLink.addEventListener("click", function (e) {
                const productid = this.getAttribute("data-param");
                verwijderenUitWinkelwagen(productid);
            });
            const favoriteIcon = element.querySelector("#favoriteIcon");
            favoriteIcon.addEventListener("click", function () {
                const productid = this.getAttribute("data-param");
                if (favoriteIcon.classList.contains('fa-regular')) {
                    favoriteIcon.classList.remove('fa-regular');
                    favoriteIcon.classList.add('fa-solid');
                    addToFavorite(productid);
                    return
                }
                if (favoriteIcon.classList.contains('fa-solid')) {
                    favoriteIcon.classList.remove('fa-solid');
                    favoriteIcon.classList.add('fa-regular');
                    removeFromFavorite(productid);
                }
            });
        });
    } catch (error) {
        console.error(error);
    }
}

function addToFavorite(productID) {
    console.log(productID);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authentication", JSON.parse(localStorage.getItem("response")).randomstring);

    var raw = JSON.stringify({
        "productId": productID
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch(baseURL + "klant/favoriet/toevoegen", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.succes) {
            } else {
                console.log(result.validaties);
                alert("Mislukt want " + result.validaties)
            }
        })
        .catch(error => console.log('error', error));
}

function removeFromFavorite(productID) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authentication", JSON.parse(localStorage.getItem("response")).randomstring);

    var raw = JSON.stringify({
        "productId": productID
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch(baseURL + "klant/favoriet/verwijderen", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.succes) {
            } else {
                console.log(result.validaties);
                alert("Mislukt want " + result.validaties)
            }
        })
        .catch(error => console.log('error', error));
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
            alert("Product toegevoegd");
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
