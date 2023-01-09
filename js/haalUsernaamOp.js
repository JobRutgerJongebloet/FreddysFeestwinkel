// functie aanmaken 
function haalUsernaamOp(evt) {
  evt.preventDefault();
  let formulier = document.getElementById("product-form1")

  if (!formulier.checkValidity()) {
    evt.preventDefault()
    evt.stopPropagation()
  }
  formulier.classList.add('was-validated')

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