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
function haalUsernaamOp(evt) {
  evt.preventDefault();
  let formulier = document.getElementById("product-form1")
  if (formulier.classList.contains('was-validated')) {

    // Formulier uitlezen
    let usernaamInvoer = document.getElementById('usernaam').value;
    let wachtwoordInvoer = document.getElementById('wachtwoord').value;

    // Javascript object
    let nieuweUser = {
      naam: usernaamInvoer,
      password: wachtwoordInvoer,
    }

    fetch("http://localhost:8080/klanten/aanmaken", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nieuweUser)
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