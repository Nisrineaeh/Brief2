// document
//   .getElementById("form")
//   .addEventListener("submit", function (event) {
//     let emailInput = document.getElementById("email");
//     let passwordInput = document.getElementById("pass");
//     let errorMessage = document.getElementById("error");

//     if (emailInput.value === "" || passwordInput.value === "") {
//       event.preventDefault(); // Empêche l'envoi du formulaire

//       errorMessage.style.display = "block";
//     }
//   });

//   document.getElementById("email").addEventListener("input", function () {
//     let errorMessage = document.getElementById("error");
//     errorMessage.style.display = "none";
//   });

//   document
//     .getElementById("pass")
//     .addEventListener("input", function () {
//       let errorMessage = document.getElementById("error-message");
//       errorMessage.style.display = "none";
//     });

// document
//   .getElementById("sent")
//   .addEventListener("click", function (event) {
//     let formInputs = document.querySelectorAll("form");

//     for ( i = 0; i < formInputs.length; i++) {
//       if (formInputs[i].value === "") {
//         event.preventDefault(); // Empêche l'envoi du formulaire

//         var errorMessage = document.createElement("p");
//         errorMessage.innerText = "Veuillez remplir tous les champs.";
//         errorMessage.style.color = "red";

//         var formElement = document.getElementById("my-form");
//         formElement.appendChild(errorMessage);

//         return; // Arrête la boucle après avoir trouvé un champ vide
//       }
//     }
//   });