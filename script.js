document
  .getElementById("sent")
  .addEventListener("click", function (event) {
    let formInputs = document.querySelectorAll("form input");

    for (i = 0; i < formInputs.length; i++) {
      if (formInputs[i].value === "") {
        event.preventDefault(); // Empêche l'envoi du formulaire
        let elementToFade = document.getElementById("error");
        elementToFade.style.opacity = "1";
        return;
      }
    }
  });

document
    .getElementById("sent")
    .addEventListener("click", function (event) {
        let email = document.getElementById("email").value;
        let emailRegex = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";
        let errorMessage = document.getElementById("errmail");
    for (index = 0; index < email.length; index++) {
        if(email[i].value != emailRegex){
            let elementToFade2 = document.getElementById("errmail");
            elementToFade2.style.opacity = "1";
            return;
    }
    }
});
//   if (emailRegex.test(email)) {
//     let elementToFade2 = document.getElementById("errmail");
//     elementToFade2.style.opacity ="1";
//     return;
// };

// function checkEmail(email) {
//   let re =
//     "/^(([^<>()[]\.,;:\s@""]+)*)|("+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/";
//   return re.test(email);
// }
// function validate() {
//   var email = document.getElementById("email").value;

//   if (checkEmail(email)) {
//     alert("Adresse e-mail valide");
//   } else {
//     alert("Adresse e-mail non valide");
 
//   return false; }
// }