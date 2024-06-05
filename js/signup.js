function registerUser() {
  if(!validateForm()){
    return;
  }

  
  let nome = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (password != confirmPassword) {
    showErrorMessage("Le password non corrispondono");
    return;
  }

  // Recupero gli utenti registrati
  let usersData = localStorage.getItem('usersData');
  let users = [];
  if (usersData) {
    users = usersData.split(';').map(userStr => { //map restituisce un array di oggetti utente
      let [nome, cognome, email, password] = userStr.split(',');
      return { nome, cognome, email, password };
    });
  }

  // Aggiungo il nuovo utente
  let newUser = { nome, cognome, email, password };
  users.push(newUser);

  // Salvo la stringa nel localStorage
  localStorage.setItem('usersData', users.map(user => `${user.nome},${user.cognome},${user.email},${user.password}`).join(';'));

  localStorage.setItem('isAuthenticated', true);

  window.location.href = "index.html";
}

function validateForm() {
  let nome = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (nome == "" && cognome == "" && email == "" && password == "" && confirmPassword == "") {
    showErrorMessage("Per favore, compila tutti i campi del form");
    return false;
  }
  else{
    if(nome == ""){
      showErrorMessage("Per favore, inserisci il tuo nome");
      return false
    }

    if(cognome == ""){
      showErrorMessage("Per favore, inserisci il tuo cognome");
      return false
    }

    if(email == ""){
      showErrorMessage("Per favore, inserisci il tuo indirizzo email");
      return false
    }

    if(password == ""){
      showErrorMessage("Per favore, inserisci una password");
      return false
    }

    if(confirmPassword == ""){
      showErrorMessage("Per favore, conferma la password");
      return false
    }
  }

  return true;
}