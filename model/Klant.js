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

// Klant registreren
function registerUser(evt) {
    evt.preventDefault();
    let register = document.getElementById("registerForm");

    if (register.classList.contains('was-validated')) {

        // Getting the values from the inputs
        let invoerNaam = document.getElementById('naam').value;
        let invoerEmail = document.getElementById('email').value;
        let invoerWachtwoord = document.getElementById('wachtwoord').value;
        let invoerBevestigWachtwoord = document.getElementById('bevestigWachtwoord').value;

        // Validate if "invoerWachtwoord" & "invoerBevestigWachtwoord" are the same
        if (invoerWachtwoord == invoerBevestigWachtwoord) {
            wachtwoordValideerd = invoerBevestigWachtwoord;

            // New object
            let nieuweKlant = {
                naam: invoerNaam,
                email: invoerEmail,
                password: wachtwoordValideerd,
            }

            console.log(nieuweKlant);
            // Converting an object to JSON
            data = JSON.stringify(nieuweKlant);
            params = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: data
            }

            // HTTP POST request
            fetch(baseURL + "klanten/aanmaken", params)
                .then((data) => console.log(data))
        }
    }
}