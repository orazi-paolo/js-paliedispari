// creo funzione per sapere se una parola è palindroma
function isPalindroma(word) {
    // rimuovo i spazi e la converto sempre tutta in minuscolo (replace l ho trovato ma dovrebbe essere un espressione regolare ??)
    const cleanWord = word.replace(/\s+/g, '').toLowerCase();
    // la inverto
    const inverterWord = cleanWord.split('').reverse().join('');
    // controllo se sono uguali quella invertita e quella inserita
    return cleanWord === inverterWord;
}


// creo una funzione per generare numeri casuali
function generatedCasualNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione per stabilire se un numero è pari o dispari
function evenOrShots(number){
    if (number % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}