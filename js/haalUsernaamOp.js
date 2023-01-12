// functie aanmaken 
test123();
// async function haalUsernaamOp(evt) {
//   evt.preventDefault();
//   let formulier = document.getElementById("product-form1")

//   if (!formulier.checkValidity()) {
//     evt.preventDefault()
//     evt.stopPropagation()
//   }
//   formulier.classList.add('was-validated')

//   if (formulier.classList.contains('was-validated')) {
//   let email = document.getElementById("gebruikersnaam").value;
//   let password = document.getElementById("password").value;
//   }

//   checkGebruiker(email, password);

//   const checkGebruiker = async (email, password) => {
//     try {
//       const response = await fetch("http://localhost:8080/klanten/aanmaken", {
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
function test123(){
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:8080/klanten/email/123@hotmail.com\n", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}