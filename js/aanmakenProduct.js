
// functie aanmaken 
function maakProductAan(evt) {
  evt.preventDefault();
  let formulier = document.getElementById("product-form")

  if (!formulier.checkValidity()) {
    evt.preventDefault()
    evt.stopPropagation()
  }
  formulier.classList.add('was-validated')
  
  if (formulier.classList.contains('was-validated')) {

    // Formulier uitlezen
    let NaamInvoer = document.getElementById('productNaam').value;
    let BeschrijvingInvoer = document.getElementById('productBeschrijving').value;
    let CategorieInvoer = document.getElementById('productCategorie').value;
    let PrijsInvoer = document.getElementById('productKosten').value;

    // Javascript object
    let nieuwProduct = {
      naam: NaamInvoer,
      beschrijving: BeschrijvingInvoer,
      categorie: CategorieInvoer,
      kosten: PrijsInvoer
    }

    fetch("http://localhost:8080/product/aanmaken", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nieuwProduct)
    })
      .then(response => response.json())
      .then(data => {
        if (data.succes === true) {
          alert('Het is goed gegaan')
        }
        else {
          alert('Er is iets fout gegaan')
        }

      });
  }
}
// functie brengt gebruiker weer naar de productpagina
// function naarAnderePagina() {
//   document.location.href = "index.html";
// }

