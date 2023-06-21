document.getElementById("sent").addEventListener("click", function (event) {
  let formInputs = document.querySelectorAll("input");
  let passInput = document.getElementById("pass");
  for (i = 0; i < formInputs.length; i++) {
    if (formInputs[i].value === "") {
      event.preventDefault(); // Empêche l'envoi du formulaire
      let elementToFade = document.getElementById("error");
      elementToFade.style.opacity = "1";
      formInputs[i].style.border = "2px solid red";
      console.log(formInputs[i]);
    }
  }
});

document.getElementById("sent").addEventListener("click", function (event) {
  let email = document.getElementById("email").value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let errorMessage = document.getElementById("errmail");
  let emailValid = emailRegex.test(email);
  let emailInput = document.getElementById("email");
  if (emailValid) {
    errorMessage.style.opacity = "0";
  } else {
    errorMessage.style.opacity = "1";
    emailInput.style.border = "2px solid red";
  }
});

document.addEventListener("DOMContentLoaded", function (event) {
  let formInputs = document.querySelectorAll("input");
  let email = document.getElementById("email");
  let errorMessage = document.getElementById("errmail");
  let errorV = document.getElementById("error");
  let passInput = document.getElementById("pass");

  for (i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("change", function (event) {
      if (email.value != "") {
        errorMessage.style.opacity = "0";
        email.style.border = "none";
      } else if (passInput.value != "") {
        errorV.style.opacity = "0";
        passInput.style.border = "none";
      }else if (email.value != "" && passInput.value != "") {
        errorMessage.style.opacity = "0";
        errorV.style.opacity = "0";
        email.style.border = "none";
        passInput.style.border = "none";
      }
    });
  }
});
