/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */

// Funzione numeri random tra Min e Max
function nRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// /Funzione numeri random tra Min e Max

// Dichiarazioni Variabili
var bombeLength = 16;
var bombe = [];
var nBomba = 0;
// /Dichiarazioni Variabili

// Crea una lista di numeri random diversi tra loro
do{
  nBomba = nRandom(1, 100);
  if(bombe.includes(nBomba)){
    nBomba = nRandom(1, 100);
  }
  else{
    bombe.push(nBomba);
  }
}
while(bombe.length < bombeLength)
console.log(bombe);
// Crea una lista di numeri random diversi tra loro
