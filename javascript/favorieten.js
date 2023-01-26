import { NavBar } from '../models/navBar.js'
import { Favicon } from '../models/favicon.js'
import { Footer } from '../models/footer.js'

const navbar = new NavBar();
const favicon = new Favicon();
const footer = - new Footer();

let response = JSON.parse(localStorage.getItem("response"));
if (response != null) {
    navbar.updateNavBar(); 
    if (response.role == "KLANT") {
        ophalenFavorieten();
    }
}

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

        let producten = document.getElementById("favorieten")
        let img = "";
        for (let d of result) {
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
                img = "../images/products/halloween-spook-kostuum.jpg";
            }

            favorieten.innerHTML +=
                `   
        <div class="col-md-3 p-4">
        <div class="card" id="${d.id}">
            <img src=${img} class="card-img-top" style="height: 300px" translate-middle alt="...">
            <i data-param="${d.id}" id="favoriteIcon" class="link__icon icon fa-regular fa-heart"></i>
            <h5 class="card-title">${d.naam}</h5>
            <p class="card-text">${d.beschrijving}</p>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">Categorie: ${d.categorie}</li>
                <li class="list-group-item">Prijs per stuk €${d.kosten}</li>
            </ul>
            <a data-param="${d.id}" id="addtocart" class="btn btn-success">Toevoegen aan winkelwagen</a>
            <a data-param="${d.id}" id="removefromcart" class="btn btn-danger">Verwijder uit winkelwagen</a>
        </div>
    </div>
        `}
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
}