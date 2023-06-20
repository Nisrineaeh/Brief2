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