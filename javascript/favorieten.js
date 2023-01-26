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
        let data = await fetch(baseURL + "klant/favorieten", requestOptions);
        let response = await data.json();

        for (let i = 0; i < response.length; i++) {

            if (response[i].afbeelding != null) {
                var afbeelding = response[i].afbeelding;
            } else {
                var afbeelding = "/images/products/rodefeestneus.jpg";
            }

            let producten = document.getElementById("favorieten")

            favorieten.innerHTML += `
                <div class="col-md-3 p-4">
                    <div class="card" id="${response[i].id}">
                        <img src="../${afbeelding}" class="card-img-top" style="height: 300px" translate-middle alt="...">
                        <i data-param="${response[i].id}" id="favoriteIcon" class="link__icon icon fa-regular fa-heart"></i>
                        <h5 class="card-title">${response[i].naam}</h5>
                        <p class="card-text">${response[i].beschrijving}</p>

                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Categorie: ${response[i].categorie}</li>
                            <li class="list-group-item">Prijs per stuk €${response[i].kosten}</li>
                        </ul>
                        <a data-param="${response[i].id}" id="addtocart" class="btn btn-success">Toevoegen aan winkelwagen</a>
                        <a data-param="${response[i].id}" id="removefromcart" class="btn btn-danger">Verwijder uit winkelwagen</a>
                    </div>
                </div>`;
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

        response.forEach(function (element) {
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
} function bestel() {
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
            var totaalhoeveelheid = 0;
            let container = document.getElementById("inhoudww");

            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

            console.log(result);
            for (let i = 0; i < result.winkelwagen.length; i++) {

                let tr = document.createElement("tr");
                container.appendChild(tr, container.firstChild);
                totaal = result.winkelwagen[i][1] * result.winkelwagen[i][0].kosten;
                subtotaal += result.winkelwagen[i][1] * result.winkelwagen[i][0].kosten;
                totaalhoeveelheid += result.winkelwagen[i][1];
                tr.innerHTML =
                    `
                        <td data-title="Product">${result.winkelwagen[i][0].naam}</td>
                        <td data-title="Prijs">€ ${result.winkelwagen[i][0].kosten}</td>
                        <td data-title="Hoeveelheid">${result.winkelwagen[i][1]}</td>
                        <td data-title="Totaal">€ ${totaal}</td>
                    `;
            }
            let totaalElement = document.getElementById("totaalprijs");
            totaalElement.innerHTML = `Totale prijs: € ` + subtotaal;
            const shoppingCartNumber = document.getElementById("shoppingCartNumber");
            shoppingCartNumber.innerHTML = totaalhoeveelheid;
        })
        .catch(error => console.log('error', error));
}

async function getProductByCategory() {
    try {
        let category = localStorage.getItem("category");
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const data = await fetch(baseURL + 'producten/' + category, requestOptions);
        const response = await data.json();

        for (let i = 0; i < response.length; i++) {
            if (response[i].afbeelding != null) {
                var afbeelding = response[i].afbeelding;
            } else {
                var afbeelding = "/images/products/rodefeestneus.jpg";
            }
            let producten = document.getElementById("product");

            producten.innerHTML += `   
                <div class="col-md-3 p-4">
                    <div class="card" id="${response[i].id}">
                        <img src="../${afbeelding}" class="card-img-top" style="height: 300px" translate-middle alt="...">
                        <i data-param="${response[i].id}" id="favoriteIcon" class="link__icon icon fa-regular fa-heart"></i>
                        <h5 class="card-title">${response[i].naam}</h5>
                        <p class="card-text">${response[i].beschrijving}</p>

                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Categorie: ${response[i].categorie}</li>
                            <li class="list-group-item">Prijs per stuk €${response[i].kosten}</li>
                        </ul>
                        <a data-param="${response[i].id}" id="addtocart" class="btn btn-success">Toevoegen aan winkelwagen</a>
                        <a data-param="${response[i].id}" id="removefromcart" class="btn btn-danger">Verwijder uit winkelwagen</a>
                    </div>
                </div>`;
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

async function haalProductenOp() {
    try {
        let data = await fetch(baseURL + 'producten');
        let response = await data.json();

        for (let i = 0; i < response.length; i++) {

            if (response[i].afbeelding != null) {
                var afbeelding = response[i].afbeelding;
            } else {
                var afbeelding = "/images/products/rodefeestneus.jpg";
            }

            let producten = document.getElementById("product");

            producten.innerHTML += `   
                <div class="col-md-3 p-4">
                    <div class="card" id="${response[i].id}">
                        <img src="../${afbeelding}" class="card-img-top" style="height: 300px" translate-middle alt="...">
                        <i data-param="${response[i].id}" id="favoriteIcon" class="link__icon icon fa-regular fa-heart"></i>
                        <h5 class="card-title">${response[i].naam}</h5>
                        <p class="card-text">${response[i].beschrijving}</p>

                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Categorie: ${response[i].categorie}</li>
                            <li class="list-group-item">Prijs per stuk €${response[i].kosten}</li>
                        </ul>
                        <a data-param="${response[i].id}" id="addtocart" class="btn btn-success">Toevoegen aan winkelwagen</a>
                        <a data-param="${response[i].id}" id="removefromcart" class="btn btn-danger">Verwijder uit winkelwagen</a>
                    </div>
                </div>`;
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