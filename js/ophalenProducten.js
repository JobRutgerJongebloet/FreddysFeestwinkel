haalProductenOp();
// link.addEventListener("click", function(evt){
// evt.preventDefault(); 
// console.log("hoi");
// });
let winkelwagen = {};
let winkelwagenProucten = [];
function haalProductenOp() {
    fetch(baseURL + 'producten')
        .then(response => response.json())
        .then(lijst => {
            console.log(lijst);
            let producten = document.getElementById("product");
            for (let d of lijst) {
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
                                        <li class="list-group-item">Prijs (€): ${d.subtotal}</li>
                                    </ul>
                                    <div class="card body">
                                    <a data-param="${d.id}" id="addtocart" class="btn btn-primary">Toevoegen aan winkelwagen</a>
                                    </div>
                                </div>
                        </div>`
            }
            const links = document.querySelectorAll("#addtocart");
            links.forEach(function (link) {
                link.addEventListener("click", function (e) {
                    e.preventDefault();
                    const productid = this.getAttribute("data-param");
                    toevoegenAanWinkelwagen(productid);

                });

            });
        })
}
function toevoegenAanWinkelwagen(productid) {
    fetch(baseURL + 'product/' + productid)
        .then(response => response.json())
        .then(product => {
            console.log(product.naam + " " + "is toegevoegd aan winkelwagen");
            if (winkelwagen.hasOwnProperty(product.naam)) {
                winkelwagen[product.naam] += 1;
            } else {
                winkelwagen[product.naam] = 1;
            }
            console.log(winkelwagen);
            let inhoudww = document.getElementById("inhoudww");
            let winkelwagenInhoud = '';
            for (let key in winkelwagen) {
                winkelwagenInhoud += `${winkelwagen[key]} x ${key} <br>`
            }
            inhoudww.innerHTML = winkelwagenInhoud;
        })
}

