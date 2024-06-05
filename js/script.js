window.addEventListener("load", function() {
  // Nascondo il loader
  document.querySelector(".loader-spinner").style.display = "none";

  // Gestisco il click sul pulsante di logout
  const logoutButton = document.getElementById("logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", function(event) {
      event.preventDefault();
      // Rimuovi i dati dell'utente corrente dal localStorage
      localStorage.removeItem('currentUser');
      localStorage.removeItem('isAuthenticated');

      window.location.href = "index.html";
    });    
  }

  // Mostro il modale per i cookie solo se non è stata accettata l'accettazione dei cookie
  if (!localStorage.getItem('cookiesAccepted')) {
    const cookiesModal = new bootstrap.Modal(document.getElementById('cookies-modal'));
    cookiesModal.show();
  }

  // Aggiungo event listener per il click sul pulsante "Accetta"
  const acceptButton = document.getElementById("accept-cookies");
  if (acceptButton) {
    acceptButton.addEventListener("click", function(event) {
      event.preventDefault();
      localStorage.setItem('cookiesAccepted', true);
      const cookiesModal = new bootstrap.Modal(document.getElementById('cookies-modal'));
      cookiesModal.hide();
    });
  }

  // Aggiungo event listener per il click sul pulsante "Continua senza Accettare"
  const continueWithoutAcceptingButton = document.getElementById("continue-without-accepting-cookies");
  if (continueWithoutAcceptingButton) {
    continueWithoutAcceptingButton.addEventListener("click", function(event) {
      event.preventDefault();
      localStorage.setItem('cookiesAccepted', false);
      const cookiesModal = new bootstrap.Modal(document.getElementById('cookies-modal'));
      cookiesModal.hide();
    });
  }

  // Mostra il menu del profilo
  showProfileMenu();
});


// Funzione per aggiungere un'attività ai preferiti
function addToFavorites(activityId) {
  // Recupera l'array di preferiti dal localStorage
  let favorites = localStorage.getItem('favorites') ? localStorage.getItem('favorites').split(',') : [];

  // Controlla se l'ID dell'attività è già nei preferiti
  if (!favorites.includes(activityId.toString())) {
      // Aggiungi l'ID dell'attività ai preferiti
      favorites.push(activityId.toString());

      // Salva l'array aggiornato dei preferiti nel localStorage
      localStorage.setItem('favorites', favorites.join(','));
  }
}

// Funzione per aggiungere o rimuovere un'attività dai preferiti
function toggleFavorites(id) {
  let favorites = localStorage.getItem('favorites') || '';
  // Converto ogni elemento dell'arrey in un intero con .map
  // Rimuovo isNan presenti con filter
  favorites = favorites.split(',').map(item => parseInt(item)).filter(item => !isNaN(item));
  const index = favorites.indexOf(id);
  const heartButton = document.querySelector(`button[data-id="${id}"]`);

  if (index == -1) {
    favorites = addFavorite(id, heartButton, favorites); // Modifica qui
  } else {
    removeFavorite(index, heartButton, favorites);
  }

  localStorage.setItem('favorites', favorites.join(','));
}

function addFavorite(id, button, favorites) { // Aggiunta della variabile favorites come parametro
  button.classList.add('btn-preferiti-colored');
  favorites.push(id);
  return favorites; // Restituisci la versione aggiornata di favorites
}

function removeFavorite(index, button, favorites) { // Anche qui aggiungiamo favorites come parametro
  button.classList.remove('btn-preferiti-colored');
  favorites.splice(index, 1);
}

// Mostra il menu del profilo in base all'autenticazione
function showProfileMenu() {
  let isAuthenticated = localStorage.getItem('isAuthenticated');
  if (isAuthenticated && isAuthenticated == 'true') {
    document.getElementById("profileMenu").style.display = "block";
    document.getElementById("loginLink").style.display = "none";
    document.getElementById("signupLink").style.display = "none";
  } else {
    document.getElementById("profileMenu").style.display = "none";
    document.getElementById("loginLink").style.display = "block";
    document.getElementById("signupLink").style.display = "block";
  }
}

