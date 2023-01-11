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

// Product creëren
function createProduct(evt) {
    evt.preventDefault();
    let productForm = document.getElementById("addProductForm");

    if (productForm.classList.contains('was-validated')) {

        // Getting the values from the inputs
        let invoerNaam = document.getElementById('naam').value;
        let invoerCategorie = document.getElementById('categorie').value;
        let invoerBeschrijving = document.getElementById('beschrijving').value;
        let invoerVoorraad = document.getElementById('voorraad').value;
        let invoerKosten = document.getElementById('kosten').value;
        let invoerSubtotaal = document.getElementById('subtotaal').value;

        // TODO: Uploading image + Saving image to the database

        // New product
        let nieuweProduct = {
            naam: invoerNaam,
            categorie: invoerCategorie,
            beschrijving: invoerBeschrijving,
            voorraad: invoerVoorraad,
            kosten: invoerKosten,
            subtotal: invoerSubtotaal
        }

        // Converting an object to JSON
        data = JSON.stringify(nieuweProduct);
        params = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        }

        // HTTP POST request
        fetch("http://localhost:8080/product/aanmaken", params)
            .then((data) => console.log(data))
    }
}