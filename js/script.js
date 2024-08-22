/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 
*/

// prendo dal dom gli elementi che mi servono
const inputWord = document.getElementById('word');
const button = document.getElementById('send');
const result = document.getElementById('result');

// quando clicco
button.addEventListener('click', function() {
    // recupero il valore dall'input
    const word = inputWord.value;
    // verifico se la parola inserita dall'utente è palindroma con la funziona nell altra pagina
    isPalindroma(word) ? result.textContent = `"${word}" è una parola palindroma.` : result.textContent = `"${word}" non è una parola palindroma.`;
});