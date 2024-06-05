let loginAttempts = 0;

function loginUser() {
  // Recupero le credenziali dell'utente
  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPassword").value.trim();

  // Recupero gli utenti registrati dal localStorage
  let usersData = localStorage.getItem('usersData');
  if (!usersData) {
    alert("Nessun utente registrato!");
    return;
  }

  let users = usersData.split(';').map(userStr => { //map restituisce un array di oggetti utente
    let [nome, cognome, userEmail, userPassword] = userStr.split(',');
    return { nome, cognome, email: userEmail, password: userPassword };
  });

  // Controllo se l'email e la password corrispondono a quelle di un utente registrato
  let foundUser = users.find(user => user.email == email && user.password == password);
  if (foundUser) {
    // Salva i dati dell'utente nell'archivio locale
    localStorage.setItem('currentUser', `${foundUser.nome},${foundUser.cognome},${foundUser.email},${foundUser.password}`);
    localStorage.setItem('isAuthenticated', true);
    window.location.href = "index.html";
  } else {
    // Gestione dell'errore di login
    loginAttempts++;
    if (loginAttempts > 3) {
      showRobotBox();
    } else {
      showErrorMessage("Email o password non corretta! Riprova.");
    }
  }
}

function showErrorMessage(message) {
  let errorMessageElement = document.getElementById("error-message");
  errorMessageElement.textContent = message;
  errorMessageElement.style.color = "red";
  errorMessageElement.style.display = "block";
}

function showRobotBox() {
  // Ottengo il riferimento al modal
  let modal = document.getElementById("robotModal");
  // Mostro il modal utilizzando Bootstrap
  let bootstrapModal = new bootstrap.Modal(modal);
  bootstrapModal.show();
}

// Funzione chiamata quando l'utente conferma di non essere un robot
function confirmNotRobot() {
  loginAttempts = 0;
}