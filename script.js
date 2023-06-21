document.getElementById("sent").addEventListener("click", function (event) {
  let formInputs = document.querySelectorAll("form input");
  let passInput = document.getElementById("pass");
  for (i = 0; i < formInputs.length; i++) {
    if (formInputs[i].value === "") {
      event.preventDefault(); // Empêche l'envoi du formulaire
      let elementToFade = document.getElementById("error");
      elementToFade.style.opacity = "1";
      passInput.style.border = "2px solid red";
      return;
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
