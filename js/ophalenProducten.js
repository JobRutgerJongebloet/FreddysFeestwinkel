let winkelwagen = {};
let winkelwagenProucten = [];
let totalPrice = 0;


haalProductenOp();
function haalProductenOp() {
    fetch(baseURL + 'producten')
        .then(response => response.json())
        .then(lijst => {
            console.log(lijst);
            let producten = document.getElementById("product");
            for (let d of lijst) {
                let quantity = 0;
                if (winkelwagen.hasOwnProperty(d.naam)) {
                    quantity = winkelwagen[d.naam];
                }
                producten.innerHTML += `
                        <div class="col">
                                <div class="card" style="width: 18rem;">
                                    <img src="https://www.feestkleding.nl/media/catalog/product/cache/c9804476f3bdaad700372bd35abce089/fk/g/r/grote-clownsneuzen-rood-12x-0.jpg" class="card-img-top" translate-middle alt="...">
                                    <div class="card body">
                                    <h5 class="card-title text-center">
                                     ${d.naam}            
                                    </h5>
                                    <p class="card-text">
                                     ${d.omschrijving}
                                    </p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Categorie: ${d.categorie}</li>
                                        <li class="list-group-item">Prijs per stuk €${d.subtotal}</li>
                                    </ul>
                                    <div class="card body">
            <a data-param="${d.id}" id="addtocart" class="btn btn-primary">Toevoegen aan winkelwagen</a>
            <a data-param="${d.id}" id="removefromcart" class="btn btn-danger">Verwijder uit winkelwagen</a>
            <span class="cart-quantity" id="quantity-${d.id}"></span>
        </div>
                                </div>
                        </div>`
            }
            const addLinks = document.querySelectorAll("#addtocart");
            addLinks.forEach(function (addLink) {
                addLink.addEventListener("click", function (e) {
                    e.preventDefault();
                    const productid = this.getAttribute("data-param");
                    toevoegenAanWinkelwagen(productid);
                });
            });
            const removeLinks = document.querySelectorAll("#removefromcart");
            removeLinks.forEach(function (removeLink) {
                removeLink.addEventListener("click", function (e) {
                    e.preventDefault();
                    const productid = this.getAttribute("data-param");
                    verwijderenUitWinkelwagen(productid);
                });
            });
        });
}

function toevoegenAanWinkelwagen(productid) {
    fetch(baseURL + 'product/' + productid)
        .then(response => response.json())
        .then(product => {
            console.log(product.naam + " " + "is toegevoegd aan winkelwagen");
            if (winkelwagen.hasOwnProperty(product.naam)) {
                winkelwagen[product.naam].aantal += 1;
                winkelwagen[product.naam].subtotal += product.subtotal;
            } else {
                winkelwagen[product.naam] = {
                    aantal: 1,
                    subtotal: product.subtotal
                }
            }
            console.log(winkelwagen);
            let inhoudww = document.getElementById("inhoudww");
            let winkelwagenInhoud = '';
            let totaalprijs = 0;
            for (let key in winkelwagen) {
                winkelwagenInhoud += `${winkelwagen[key].aantal} x ${key} : € ${winkelwagen[key].subtotal} <br>`
                totaalprijs += winkelwagen[key].subtotal;
            }
            inhoudww.innerHTML = winkelwagenInhoud;
            let totaalElement = document.getElementById("totaalprijs");
            totaalElement.innerHTML = `Totale prijs: € ${totaalprijs}`;
            let quantityElement = document.getElementById("quantity-" + productid);
            quantityElement.innerHTML = winkelwagen[product.naam].aantal;
        })
}

function verwijderenUitWinkelwagen(productid) {
    fetch(baseURL + 'product/' + productid)
        .then(response => response.json())
        .then(product => {
            console.log(product.naam + " " + "is verwijderd uit winkelwagen");
            if (winkelwagen.hasOwnProperty(product.naam)) {
                if (winkelwagen[product.naam].aantal > 1) {
                    winkelwagen[product.naam].aantal -= 1;
                    winkelwagen[product.naam].subtotal -= product.subtotal;
                } else {
                    delete winkelwagen[product.naam];
                }
            }
            console.log(winkelwagen);
            let inhoudww = document.getElementById("inhoudww");
            let winkelwagenInhoud = '';
            let totaalprijs = 0;
            for (let key in winkelwagen) {
                winkelwagenInhoud += `${winkelwagen[key].aantal} x ${key} : € ${winkelwagen[key].subtotal} <br>`
                totaalprijs += winkelwagen[key].subtotal;
            }
            inhoudww.innerHTML = winkelwagenInhoud;
            let totaalElement = document.getElementById("totaalprijs");
            totaalElement.innerHTML = `Totaalprijs: € ${totaalprijs}`;
            let quantityElement = document.getElementById("quantity-" + productid);
            if (winkelwagen.hasOwnProperty(product.naam)) {
                quantityElement.innerHTML = winkelwagen[product.naam].aantal;
            } else {
                quantityElement.innerHTML = 0;
            }
        })
}







// function updateWinkelwagenInhoud() {
// let inhoudww = document.getElementById("inhoudww");
// let winkelwagenInhoud = '';
// for (let key in winkelwagen) {
//     winkelwagenInhoud += `${winkelwagen[key]} x ${key} <br>`
// }
// inhoudww.innerHTML = winkelwagenInhoud;
// }
