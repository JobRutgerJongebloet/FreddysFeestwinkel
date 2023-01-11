

// Ophalen van producten met gebruik van een API
let producten = document.getElementById('product');

function haalProductenOp() {
    fetch(baseURL + 'producten')
        .then(response => response.json())
        .then(lijst => {

            for (let d of lijst) {
                console.log(d);
                producten.innerHTML += `
                        <div class="col">
                                <div class="card" style="width: 18rem;">
                                    <img src="https://www.feestkleding.nl/media/catalog/product/cache/c9804476f3bdaad700372bd35abce089/fk/g/r/grote-clownsneuzen-rood-12x-0.jpg" class="card-img-top" translate-middle alt="...">
                                    <div class="card body">
                                    <h5 class="card-title text-center">
                                     ${d.naam}            
                                    </h5>
                                    <p class="card-text">
                                     ${d.beschrijving}
                                    </p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Categorie: ${d.categorie}</li>
                                        <li class="list-group-item">Voorraad: ${d.voorraad}</li>
                                    </ul>
                                    <div class="card body">
                                    <a href="#" class="btn btn-primary">Toevoegen aan winkelwagen</a>
                                    </div>
                                </div>
                        </div>`
            }
        })
}

