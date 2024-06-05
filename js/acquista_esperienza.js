// Simulazione dei dati delle esperienze
const esperienze = [
    { id: 1, nome: "Bungee Jumping", descrizione: "Senti l'adrenalina salire mentre ti prepari a saltare nel vuoto con il bungee jumping: un'esperienza che ti fa provare l'emozione del volo libero. Sospeso in aria da un elastico, ti tufferai nel vuoto per poi essere risucchiato su, vivendo una scarica di adrenalina unica. Pronto a sfidare la gravità e a sentire l'emozione del bungee jumping? Vivi il brivido del salto e lasciati trasportare dall'ebbrezza dell'aria!", prezzo: "€99", durata: "1 ora", partecipanti: "10"},
    { id: 2, nome: "Paracadutismo", descrizione: "Vivi l'emozione pura del paracadutismo: un'esperienza indimenticabile che ti fa toccare il cielo. Con il paracadute come tua ali, lanciati nel vuoto e goditi la sensazione di libertà assoluta mentre plani nell'aria. Senti il vento sul viso e ammira il mondo da una prospettiva unica. Pronto a sfidare la gravità e a vivere il brivido del paracadutismo? Alza gli occhi al cielo e vola libero!", prezzo: "€199", durata: "2 ore", partecipanti: "10" },
    { id: 3, nome: "Surf", descrizione: "Scopri l'emozione del surf: cavalca le onde e senti l'energia del mare sotto i tuoi piedi. Con una tavola sotto i piedi e il sole sul viso, sfidi le onde e vivi il momento. Senti la libertà e l'adrenalina mentre ti abbandoni al ritmo del mare. Pronto a cavalcare l'onda e a sentire la potenza della natura? Lanciati nel mondo del surf e lasciati trasportare dalla magia dell'oceano!", prezzo: "€64", durata: "2/3 ore", partecipanti: "15" },
    { id: 4, nome: "Gabbia tra gli Squali", descrizione: "Avventura estrema: immersione in gabbia tra gli squali. Entra nel regno dei predatori marini e vivi un'emozione indimenticabile. Protetto da una gabbia, ti troverai faccia a faccia con gli squali più maestosi del mondo. Senti l'adrenalina mentre ammiri queste magnifiche creature nel loro ambiente naturale. Pronto a sfidare le tue paure e a sperimentare il brivido dello squalo in prima persona? Entra in acqua e immergiti nell'emozione!", prezzo: "€89", durata: "1 ora", partecipanti: "8" },
    { id: 5, nome: "Immersioni", descrizione: "Esplora il mondo sommerso con l'immersione subacquea: un'esperienza che ti porta in un altro universo. Con maschera e bombola, ti immergerai nelle profondità marine, scoprendo un mondo ricco di colori e creature straordinarie. Senti la libertà mentre flutti nell'acqua e respiri sotto il mare. Pronto a esplorare il regno subacqueo e a scoprire segreti nascosti? Tuffati nell'avventura e lasciati trasportare dalla bellezza dell'oceano!", prezzo: "€79", durata: "2 ore", partecipanti: "10" },
    { id: 6, nome: "Parapendio", descrizione: "Esplora il cielo come mai prima d'ora con il parapendio: un'emozionante avventura che ti fa volare libero come un uccello. Con un'ala a forma di paracadute e la forza del vento, planerai attraverso paesaggi mozzafiato, sperimentando la sensazione di libertà assoluta. Pronto a solcare le correnti ascendenti e a sentire l'adrenalina del volo? Entra nel mondo del parapendio e alza il tuo spirito fino alle nuvole!", prezzo: "€89", durata: "2 ore", partecipanti: "8" },
    { id: 7, nome: "WindSurf", descrizione: "Vivi l'emozione del windsurf: cavalca il vento e l'acqua in un mix perfetto di adrenalina e libertà. Con la tavola sotto i piedi e la vela al vento, ti sentirai libero mentre sfrecci sull'acqua. Senti la potenza del vento e il brivido della velocità mentre ti diverti sulle onde. Pronto a solcare i mari e a sperimentare la magia del windsurf? Prendi il controllo e lasciati trasportare dal vento!", prezzo: "€49", durata: "2/3 ore", partecipanti: "15" },
    { id: 8, nome: "Zipline", descrizione: "Vivi l'avventura della zipline: un'esperienza che ti fa volare tra gli alberi, sospeso nel vuoto. Con la cima e la sicurezza al tuo fianco, scivolerai attraverso la foresta a velocità vertiginosa, sentendo l'adrenalina salire. Goditi la sensazione di volo e il panorama mozzafiato dall'alto. Pronto a sfidare le altezze e a vivere l'ebbrezza della zipline? Prendi coraggio e lasciati trasportare dal vento!", prezzo: "€59", durata: "1 ora", partecipanti: "10" },
    { id: 9, nome: "Rafting", descrizione: "Affronta le rapide con il rafting: un'esperienza che ti fa cavalcare le acque tumultuose dei fiumi. Con la forza del remo e la guida esperta, sfiderai le onde e supererai gli ostacoli naturali. Senti l'adrenalina mentre ti tuffi nelle rapide e vivi l'emozione di navigare in mezzo alla natura. Pronto a sfidare le acque e a vivere l'avventura del rafting? Prendi il remo e lasciati trasportare dalla corrente!", prezzo: "€89", durata: "2/3 ore", partecipanti: "20" },
    { id: 10, nome: "Giro in Mongolfiera", descrizione: "Esperienza magica: giro in mongolfiera. Alza lo sguardo e lasciati trasportare nell'aria, sospeso in una cesta mentre ti innalzi al di sopra del mondo. Con il vento come guida, esplorerai panorami mozzafiato e proverai un senso di libertà unico. Senti l'emozione mentre fluttui tra le nuvole e ammira il mondo da un nuovo punto di vista. Pronto a solcare i cieli e a vivere l'avventura del giro in mongolfiera? Alzati in volo e lasciati trasportare dal vento!", prezzo: "€59", durata: "2 ore", partecipanti: "8" },
    { id: 11, nome: "Passeggiata a Cavallo", descrizione: "Esperienza rilassante: passeggiata a cavallo. Cavalca in mezzo alla natura, sentendo il potere e la maestosità del cavallo sotto di te. Esplora sentieri panoramici e senti la connessione con l'ambiente circostante. Pronto a lasciarti trasportare dal ritmo del galoppo e a vivere l'avventura a cavallo? Sella e via!", prezzo: "€29", durata: "2/3 ore", partecipanti: "15" },
    { id: 12, nome: "Giro in Catamarano", descrizione: "Esperienza emozionante: giro in catamarano. Solca le onde del mare su questa barca a vela multi-scafo, sentendo il vento tra i capelli e l'acqua sotto lo scafo. Esplora la costa o tuffati nelle acque cristalline, vivendo un'avventura unica sull'acqua. Pronto a lasciarti trasportare dal vento e dalle onde? Salpa verso nuovi orizzonti!", prezzo: "€139", durata: "4 ore", partecipanti: "8" }
    // Aggiungi altre esperienze qui
];

window.onload = function() {
    // Leggi l'ID dall'URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));

    // Trova l'esperienza corrispondente all'ID
    const esperienza = esperienze.find(esperienza => esperienza.id == id);

    // Seleziona il contenitore della card
    const titleContainer = document.getElementById("title-container");
    const cardContainer = document.getElementById('activity-card-container');

    // Crea la card dinamicamente
    const h1 = document.createElement('h1');
    h1.innerText = esperienza.nome;
    const card = document.createElement('div');
    card.classList.add('col-md-12', 'mb-4');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card');

    const img = document.createElement('img');
    img.src = `./img/img_attivita_${id}.jpg`;
    img.classList.add('card-img-top-2');
    img.alt = esperienza.nome;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h3');
    title.classList.add('card-title');
    title.innerText = "Breve descrizione dell'esperienza";

    const description = document.createElement('p');
    description.classList.add('card-text');
    description.innerText = esperienza.descrizione;

    const containerInfo = document.createElement('div');
    containerInfo.classList.add("container");
    const row1 = document.createElement('div');
    row1.classList.add("row");
    const info1 = document.createElement('div');
    info1.classList.add("col-md-4");
    const info2 = document.createElement('div');
    info2.classList.add("col-md-4");
    const info3 = document.createElement('div');
    info3.classList.add("col-md-4");

    const imgClock = document.createElement('img');
    imgClock.src = `./img/clock.svg`;
    imgClock.classList.add('icons-experiences');
    imgClock.alt = "clock";
    const descClock = document.createElement('h5');
    descClock.innerText = "Durata: " + esperienza.durata;

    const imgPeople = document.createElement('img');
    imgPeople.src = `./img/people.svg`;
    imgPeople.classList.add('icons-experiences');
    imgPeople.alt = "people";
    const descPeople = document.createElement('h5');
    descPeople.innerText = "Numero Partecipanti: 1-" + esperienza.partecipanti;

    const imgEuro = document.createElement('img');
    imgEuro.src = `./img/currency-euro.svg`;
    imgEuro.classList.add('icons-experiences');
    imgEuro.alt = "euro";
    const descEuro = document.createElement('h5');
    descEuro.innerText = "Prezzo: " + esperienza.prezzo;

    const titleBooking = document.createElement('h3');
    titleBooking.innerText = "Prenota Ora";

    const descBooking = document.createElement('h5');
    descBooking.innerText = "Prenota ora l'esperienza compilando questo breve form";

    const nameCustomerInput = document.createElement('input');
    nameCustomerInput.type = 'text';
    nameCustomerInput.placeholder = 'Nome';
    nameCustomerInput.classList.add('form-control', 'mb-2');
    nameCustomerInput.required = true;

    const surnameCustomerInput = document.createElement('input');
    surnameCustomerInput.type = 'text';
    surnameCustomerInput.placeholder = 'Cognome';
    surnameCustomerInput.classList.add('form-control', 'mb-2');
    nameCustomerInput.required = true;

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Email';
    emailInput.classList.add('form-control', 'mb-2');
    nameCustomerInput.required = true;

    const numberPhoneInput = document.createElement('input');
    numberPhoneInput.type = 'tel';
    numberPhoneInput.placeholder = 'Numero di telefono';
    numberPhoneInput.classList.add('form-control', 'mb-2');
    nameCustomerInput.required = true;

    const dateSelector = document.createElement('input');
    dateSelector.type = 'date';
    dateSelector.classList.add('form-control', 'mb-2');
    nameCustomerInput.required = true;

    const placeInput = document.createElement('input');
    placeInput.type = 'text';
    placeInput.placeholder = 'Luogo';
    placeInput.classList.add('form-control', 'mb-2');
    nameCustomerInput.required = true;

    const partecipantsInput = document.createElement('input');
    partecipantsInput.type = 'number';
    partecipantsInput.min = "1";
    partecipantsInput.max = esperienza.partecipanti;
    partecipantsInput.placeholder = 'N. Partecipanti';
    partecipantsInput.classList.add('form-control', 'mb-2');
    nameCustomerInput.required = true;

    const bookButton = document.createElement('button');
    bookButton.classList.add('btn', 'btn-primary', 'me-2');
    bookButton.innerText = 'Prenota';

    const favoriteButton = document.createElement('button');
    favoriteButton.classList.add('btn', 'btn-outline-danger', 'bg-preferiti');
    favoriteButton.innerHTML = '<i class="bi bi-heart"></i>';
    favoriteButton.setAttribute('data-id', id);
    favoriteButton.addEventListener('click', function() {
        toggleFavorites(id);
    });

    // Genero un numero casuale di stelle per la valutazione
    const numStars = Math.floor(Math.random() * 5) + 1;
    
    const starContainer = document.createElement('div');
    starContainer.classList.add('star-container');

    for(let i = 1; i <= numStars; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.innerHTML = '&#9733;'; // Carattere della stella piena
        starContainer.appendChild(star);
    }

    for (let i = numStars + 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.innerHTML = '&#9734;'; // Carattere della stella vuota
        starContainer.appendChild(star);
    }

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    
    function validateForm() {
        const name = nameCustomerInput.value.trim();
        const surname = surnameCustomerInput.value.trim();
        const email = emailInput.value.trim();
        const phoneNumber = numberPhoneInput.value.trim();
        const date = dateSelector.value.trim();
        const place = placeInput.value.trim();
        const partecipants = partecipantsInput.value.trim();
        
        if (name === '' || surname === '' || email === '' || phoneNumber === '' || date === '' || place === '' || partecipants === '') {
            alert("Per favore compila tutti i campi del form.");
            return false;
        }

        return true;
    }
    
    bookButton.addEventListener('click', function() {
        // Prenota attività
        // Controllo se l'utente è autenticato
        let isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated && isAuthenticated == 'true') {
            if (validateForm()) {
                const bookingSuccessModal = new bootstrap.Modal(document.getElementById('booking-success-modal'));
                bookingSuccessModal.show();

                const bookingSuccessModalElement = document.getElementById('booking-success-modal');
                if (bookingSuccessModalElement) {
                    bookingSuccessModalElement.addEventListener('hidden.bs.modal', function() {
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

    titleContainer.appendChild(h1);
    const form = document.createElement('form');
    form.appendChild(nameCustomerInput);
    form.appendChild(surnameCustomerInput);
    form.appendChild(emailInput);
    form.appendChild(numberPhoneInput);
    form.appendChild(dateSelector);
    form.appendChild(placeInput);
    form.appendChild(partecipantsInput);


    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(containerInfo);
    containerInfo.appendChild(row1);
    row1.appendChild(info1);
    info1.appendChild(imgClock);
    info1.appendChild(descClock);
    row1.appendChild(info2);
    info2.appendChild(imgPeople);
    info2.appendChild(descPeople);
    row1.appendChild(info3);
    info3.appendChild(imgEuro);
    info3.appendChild(descEuro);

    cardBody.appendChild(titleBooking);
    cardBody.appendChild(descBooking);

    cardBody.appendChild(form);
    cardBody.appendChild(bookButton);
    cardBody.appendChild(favoriteButton);
    buttonContainer.appendChild(starContainer);
    cardBody.appendChild(buttonContainer);

    cardInner.appendChild(img);
    cardInner.appendChild(cardBody);

    card.appendChild(cardInner);

    cardContainer.appendChild(card);
}

function addToFavorites(id) {
    let favorites = localStorage.getItem('favorites') || ''; // Recupera gli ID delle attività preferite
    favorites = favorites.split(',').map(item => parseInt(item)); // Converti la stringa in un array di numeri
    const index = favorites.indexOf(id); // Controlla se l'ID è già presente tra i preferiti
    if (index == -1) {
        // Se non è presente, aggiungi l'ID ai preferiti
        favorites.push(id);
    } else {
        // Se è presente, rimuovi l'ID dai preferiti
        favorites.splice(index, 1);
    }
    // Aggiorna il localStorage con l'elenco aggiornato degli ID delle attività preferite
    localStorage.setItem('favorites', favorites.join(','));
}