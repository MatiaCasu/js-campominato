/* Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */



// Funzione numeri random tra Min e Max(compresi)
function nRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// /Funzione numeri random tra Min e Max(compresi)

// Dichiarazioni Variabili
var bombeListaMax = 3;
var maxRange = 10;
var bombeLista = [];
var nBomba = 0;
var nUtente = 0;
var nScelti = [];
var maxPartite = maxRange - bombeListaMax;
// /Dichiarazioni Variabili

// Crea una lista(16) di numeri random(1-100) diversi tra loro
do{
  nBomba = nRandom(1, maxRange);
  if(bombeLista.includes(nBomba)){
    nBomba = nRandom(1, maxRange);
  }
  else{
    bombeLista.push(nBomba);
  }
}
while(bombeLista.length < bombeListaMax);
console.log(bombeLista);
// Crea una lista(16) di numeri random(1-100) diversi tra loro

var esplosione = false;
// Chiedi all’utente un numero 1-100 fin che l'array nScelti non ha il valore di partite massime o esplosione diventa vera
do{
  nUtente = parseInt(prompt("Inserisci un numero da 1 a " + maxRange));
  // Se nUtente è incluso nell'array bombe cambia il valore di nSceltiLength per terminare il ciclo
  if(bombeLista.includes(nUtente)){
    alert("booom!");
    esplosione = true;
  }
  // Se nUtente è incluso nell'array di nScelti o fuori range
  else if(nScelti.includes(nUtente) || nUtente < 1 || nUtente > maxRange || isNaN(nUtente)){
    alert("Numero non valido!");
  }
  // Se nUtente ha superato le validazioni si aggiunge all'array di numeri già scelti
  else{
    nScelti.push(nUtente);
  }
}
while(nScelti.length < maxPartite && esplosione === false);
// Chiedi all’utente un numero 1-100 fin che l'array nScelti non ha il valore di partite massime o esplosione diventa vera

// Finito il ciclo se la bomba non è esplosa "Hai vinto"
if (esplosione === false){
  alert("Hai vinto!");
}
else{
  alert("Hai perso!");
}
// Finito il ciclo se la bomba non è esplosa "Hai vinto"

// Il punteggio è dato dai numeri validi inseriti dall'utente
console.log("Il tuo punteggio è: " + nScelti.length);
// Il punteggio è dato dai numeri validi inseriti dall'utente
