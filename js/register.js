// document.getElementById("registerForm").onsubmit = function () { postData() };

// function postData() {
//     const registerForm = document.getElementById('registerForm');
//     const naam = document.getElementById('naam');
//     const email = document.getElementById('email');
//     const wachtwoord = document.getElementById('wachtwoord');
//     const bevestigWachtwoord = document.getElementById('bevestigWachtwoord');

//     registerForm.addEventListener('submit', (e) => {
//         e.preventDefault();

//         // Get the value from the inputs
//         const naamValue = naam.value.trim();
//         const emailValue = email.value.trim();
//         const wachtwoordValue = wachtwoord.value.trim();
//         const bevestigWachtwoordValue = bevestigWachtwoord.value.trim();

//         if (naamValue == '') {
//             console.log('Naam kan niet leeg zijn');
//             return false;
//         }

//         if (emailValue == '') {
//             console.log('Email kan niet leeg zijn');
//             return false;
//         }

//         if (wachtwoordValue == '') {
//             console.log('Wachtwoord kan niet leeg zijn');
//             return false;
//         }

//         if (bevestigWachtwoordValue == '') {
//             console.log('Wachtwoord bevestigen kan niet leeg zijn');
//             return false;
//         }

//         console.log("Register");
//         console.log(naamValue);

//     });

//     // var registerForm = document.getElementById('register');

//     // registerForm.addEventListener('submit', function (event) {
//     //     // Prevents the form from autosubmitting
//     //     event.preventDefault();

//     //     const formData = new FormData(registerForm);
//     //     const data = Object.fromEntries(formData);

//     //     fetch('http://localhost:8080/klant/registreren', {
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-Type': 'application/json'
//     //         },
//     //         body: JSON.stringify(data)
//     //     }).then(res => res.json())
//     //         .then(data => console.log(data))
//     //         .catch(error => console.log(error));
//     // });

//     // if ("http://localhost:8080/klant/registreren" != null) {
//     //   url = "http://localhost:8080/klant/registreren";
//     //   data = '{ "naam": "aman", "email": "aman@gmail.com", "password": "aman01!" }';
//     //   params = {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json'
//     //     },
//     //     body: data
//     //   }
//     //   fetch(url, params)
//     //     .then(response => response.json())
//     //     .then((data) => console.log(data))
//     // }
// }