// Funzione numeri random tra Min e Max(compresi)
function nRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// /Funzione numeri random tra Min e Max(compresi)

// Dichiarazioni Variabili
var bombeListaMax = 3;
var maxRange;
var bombeLista = [];
var nBomba = 0;
var nUtente = 0;
var nScelti = [];
// /Dichiarazioni Variabili

/* BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e maxRange = 100
con difficoltà 1 => tra 1 e maxRange = 80
con difficoltà 2 => tra 1 e maxRange = 50 */


// Livello
do {
  var livello = parseInt(prompt("Scegli il livello: 0  1  2"));
  switch (livello) {
    case 0:
      maxRange = 10;
      break;
    case 1:
      maxRange = 8;
      break;
    case 2:
      maxRange = 5;
      break;
    default:
      alert("Scegli tra 0 1 o 2!")
      livello = false;
  }
} while (livello === false);
// /Livello


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


// Variabili del ciclo nUtente
var esplosione = false;
var maxPartite = maxRange - bombeListaMax; //Variabile definibile solo dopo aver scelto il livello e relativo range massimo
// Variabili del ciclo nUtente

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
console.log("Il tuo punteggio è: " + nScelti.length + " su " + maxPartite);
// Il punteggio è dato dai numeri validi inseriti dall'utente
