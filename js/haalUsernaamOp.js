// functie aanmaken 
// test123();
// async function haalUsernaamOp() {
  // evt.preventDefault();
  // let formulier = document.getElementById("product-form1")

  // if (!formulier.checkValidity()) {
  //   evt.preventDefault()
  //   evt.stopPropagation()
  // }
  // formulier.classList.add('was-validated')

  // if (formulier.classList.contains('was-validated')) {
  // let email = document.getElementById("gebruikersnaam").value;
  // let password = document.getElementById("wachtwoord").value;
  // }

//   const checkGebruiker = async (email, password) => {
//     try {
//       const response = await fetch("http://localhost:8080/klanten/inloggen", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password
//         }),
//       });
//       const data = await response.json();
      
//       if (data.emailExist) {
//         // Perform actions if user exist, like redirecting to another page or displaying a message
//         console.log(`Welcome ${email}!`)
//       } else {
//         console.log(`Email or password is incorrect!`)
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   };

// }

function maakAccountAan() {
  var username = document.getElementById('email').value;
  var password = document.getElementById('wachtwoord').value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
      username: username,
      password: password
  });

  console.log(raw);

  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
  };

  fetch("http://localhost:8080/klanten/inloggen", requestOptions)
      .then(response => response.json())
      .then(r => {

          if (!!r) {
              console.log(`Welcome ${email}!`)
          } else {
              console.log(`Email of wachtwoord is incorrect!`);
          }
      })
      .catch(error => console.log('error', error));
}

