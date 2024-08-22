/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
*/

// prendo gli elementi dal dom
const inputEvenOrShots = document.getElementById('even-or-shots');
const inputNumber = document.getElementById('number');
const button = document.getElementById('send');
const win = document.getElementById('result');


// quando clicco sul bottone invia
button.addEventListener('click', function(){
    // genero un numero random per il computer da 1 a 5
    let cpuCasualNumber = generatedCasualNumber(1,5);
    console.log(`il numreo della CPU è ${cpuCasualNumber}`);

    // prendo il valore dell input number
    let playerNumber = parseInt(inputNumber.value);
    console.log(`il numero scelto dal player è ${playerNumber}`);

    // sommo i due numeri
    sum = cpuCasualNumber + playerNumber;
    console.log(`la somma è ${sum}`);

    let result = evenOrShots(sum);
    console.log(`la somma è ${result}`);

    // dichiaro il vincitore
    if(inputEvenOrShots.value === 'pari' && result === 'pari'){
        win.innerText = 'Il giocatore ha vinto';
    }else if(inputEvenOrShots.value === 'dispari' && result === 'dispari'){
        win.innerText = 'Il giocatore ha vinto';
    }else {
        win.innerText = 'Il giocatore ha perso';
    }
});


