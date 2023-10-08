//chiedere: il nome dell'utente, il cognome, il colore preferito, infine concatena le stringhe ottenute tramite input e scrivere sulla pagine il risultato ottenuto

const numero = '22';

let nome = prompt("Inserire il proprio nome");
let cognome = prompt("Inserire il proprio cognome");
let colore = prompt("Inserire il proprio cognome");

let result = nome+cognome+colore+numero;
document.getElementById('testo').innerHTML = result;