window.addEventListener('DOMContentLoaded', function() {
  populateUserData();
  showFavoriteActivities();
});

function populateUserData() {
  // Recupero i dati dell'utente dall'archivio locale
  let currentUserData = localStorage.getItem('currentUser');
  if (currentUserData) {
    let [nome, cognome, email] = currentUserData.split(',');
    // Popolo i campi input con i dati recuperati
    document.getElementById('firstName').value = nome;
    document.getElementById('lastName').value = cognome;
    document.getElementById('email').value = email;
  }
}

function showFavoriteActivities() {
  let favorites = localStorage.getItem('favorites');

  if (!favorites || favorites.split(',').length == 0) {
    // Se l'array favorites non esiste o è vuoto, mostra il messaggio
    const preferitiContainer = document.getElementById('preferiti-container');
    preferitiContainer.innerHTML = '';

    const emptyMessage = document.createElement('div');
    emptyMessage.classList.add('empty-message');
    emptyMessage.innerHTML = '<i class="bi bi-emoji-frown-fill"></i> Non ci sono attività preferite.';
    preferitiContainer.appendChild(emptyMessage);

    preferitiContainer.style.marginBottom = '280px';

    return; // Esco dalla funzione dopo aver mostrato il messaggio
  }

  // Se ci sono attività preferite, continua a creare le card come al solito
  favorites = favorites.split(',').map(item => parseInt(item));

  const preferitiContainer = document.getElementById('preferiti-container');
  preferitiContainer.innerHTML = '';

  favorites.forEach(id => {
    // Trova l'esperienza corrispondente all'ID
    const esperienza = esperienze.find(esperienza => esperienza.id == id);

    if (esperienza) {
      // Crea la card solo se l'esperienza è trovata
      const cardCol = document.createElement('div');
      cardCol.classList.add('col-md-4', 'mb-4');

      const card = document.createElement('div');
      card.classList.add('card');

      const img = document.createElement('img');
      img.src = `img/img_attivita_${id}.jpg`;
      img.classList.add('card-img-top');
      img.alt = esperienza.nome;

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const title = document.createElement('h5');
      title.classList.add('card-title');
      title.innerText = esperienza.nome;

      const price = document.createElement('p');
      price.classList.add('card-text');
      price.innerText = `Prezzo: ${esperienza.prezzo}`;

      const learnMoreLink = document.createElement('a');
      learnMoreLink.href = `acquista_esperienza.html?id=${id}`;
      learnMoreLink.classList.add('btn', 'btn-primary', 'me-2');
      learnMoreLink.innerText = 'Scopri di più';

      const favoriteButton = document.createElement('button');
      favoriteButton.classList.add('btn', 'btn-outline-danger', 'bg-preferiti', 'btn-preferiti-colored');
      favoriteButton.innerHTML = '<i class="bi bi-heart"></i>';
      favoriteButton.dataset.id = id; // Imposta l'attributo data-id con l'ID dell'attività
      favoriteButton.onclick = function() {
        toggleFavorites(id);
        toggleFavoriteCard(id); // Aggiorna la visualizzazione della singola card dei preferiti
      };

      cardBody.appendChild(title);
      cardBody.appendChild(price);
      cardBody.appendChild(learnMoreLink);
      cardBody.appendChild(favoriteButton);

      card.appendChild(img);
      card.appendChild(cardBody);

      cardCol.appendChild(card);

      preferitiContainer.appendChild(cardCol);
    }
  });

  preferitiContainer.style.marginBottom = '100px';
}

function removeFavorite(id) {
  // Recupero gli ID delle attività preferite dal localStorage
  let favorites = localStorage.getItem('favorites') || '';
  favorites = favorites.split(',').map(item => parseInt(item)); // Converti la stringa in un array di numeri

  // Trovo l'indice dell'ID nell'array
  const index = favorites.indexOf(id);
  if (index != -1) {
    // Rimuovo l'ID dall'array se presente
    favorites.splice(index, 1);
    // Aggiorno il localStorage con l'array aggiornato
    localStorage.setItem('favorites', favorites.join(','));
  }
}

function toggleFavoriteCard(id) {
  // Seleziono la card corrispondente all'ID dell'attività
  const favoriteCard = document.querySelector(`[data-id="${id}"]`).closest('.col-md-4');
  // Controllo se la card è presente tra i preferiti
  if (isFavorite(id)) {
    // Se è presente, la card viene nascosta dalla visualizzazione
    favoriteCard.style.display = 'none'; // Nasconde la card anziché rimuoverla completamente
    removeFavorite(id); // Rimuove l'ID dalla lista delle preferenze
  } else {
    // Altrimenti, la card viene mostrata nella visualizzazione
    favoriteCard.style.display = 'block'; // Mostra la card
  }

  // Dopo aver aggiornato la visualizzazione, controlliamo se ci sono ancora attività preferite
  checkEmptyFavorites();
}

function isFavorite(id) {
  let favorites = localStorage.getItem('favorites') || '';
  favorites = favorites.split(',').map(item => parseInt(item));
  return favorites.includes(id);
}

function checkEmptyFavorites() {
  let favorites = localStorage.getItem('favorites') || '';
  if (!favorites || favorites.split(',').length == 0) {
    const preferitiContainer = document.getElementById('preferiti-container');
    preferitiContainer.innerHTML = '';

    const emptyMessage = document.createElement('div');
    emptyMessage.classList.add('empty-message');
    emptyMessage.innerHTML = '<i class="bi bi-emoji-frown-fill"></i> Non ci sono attività preferite.';
    preferitiContainer.appendChild(emptyMessage);

    preferitiContainer.style.marginBottom = '280px';
  }
}