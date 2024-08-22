// creo funzione per sapere se una parola è palindroma
function isPalindroma(word) {
    // rimuovo i spazi e la converto sempre tutta in minuscolo (replace l ho trovato)
    const cleanWord = word.replace(/\s+/g, '').toLowerCase();
    // la inverto
    const inverterWord = cleanWord.split('').reverse().join('');
    // controllo se sono uguali quella invertita e quella inserita
    return cleanWord === inverterWord;
}