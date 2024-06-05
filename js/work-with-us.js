window.addEventListener("load", function(){
  const submitButton = this.document.getElementById("submit-button");
  
  submitButton.addEventListener('click', function() {
      // Controllo se l'utente è autenticato
      let isAuthenticated = localStorage.getItem('isAuthenticated');
      if (isAuthenticated && isAuthenticated == 'true') {
          if (validateForm()) {
              const submitSuccessModal = new bootstrap.Modal(document.getElementById('submit-success-modal'));
              submitSuccessModal.show();

              const submitSuccessModalElement = document.getElementById('submit-success-modal');
              if (submitSuccessModalElement) {
                  submitSuccessModalElement.addEventListener('hidden.bs.modal', function() {
                      window.location.href = "index.html"; 
                  });
              } else {
                  console.error("Elemento del modal non trovato");
              }
          }
      } else {
          const loginRequiredModal = new bootstrap.Modal(document.getElementById('login-required-modal'));
          loginRequiredModal.show();
      }
  });
});

function validateForm() {
    // Recupera i valori inseriti dall'utente
    const companyName = document.getElementById("companyName").value.trim();
    const experience = document.getElementById("experience").value.trim();
    const email = document.getElementById("email").value.trim();
    const tel = document.getElementById("tel").value.trim();
    const site = document.getElementById("site").value.trim();

    // Verifica se qualche campo è vuoto
    if (companyName == '' || experience == '' || email == '' || tel == '' || site == '') {
        showErrorMessage("Per favore, compila tutti i campi.");
        return false; // Il form non è valido
    }

    return true; // Il form è valido
}

function showErrorMessage(message) {
  let errorMessageElement = document.getElementById("error-message");
  errorMessageElement.textContent = message;
  errorMessageElement.style.color = "red";
  errorMessageElement.style.display = "block";
}