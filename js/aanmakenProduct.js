import { Bootstrap } from '../model/bootstrap.js';
import { NavBar } from '../model/navBar.js'

const navbar = new NavBar();
const boostrap = new Bootstrap();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()

// functie aanmaken 
function maakProductAan(evt) {
  evt.preventDefault();
  let formulier = document.getElementById("product-form")
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
        if (data.succes === true){
          alert ('Het is goed gegaan')
        }
        else {
          alert ('Er is iets fout gegaan')
        }
        
      });
  }
}
// functie brengt gebruiker weer naar de productpagina
function naarAnderePagina(){
  document.location.href="product.html";
}

