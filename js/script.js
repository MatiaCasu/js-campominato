// Funzione numeri random tra Min e Max
function nRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// /Funzione numeri random tra Min e Max

// Dichiarazioni Variabili
var bombeListaMax = 16;
var maxRange = 100;
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


// Chiedi all’utente un numero 1-100 fin che l'array nScelti non ha il valore di ciclofinito
do{
  nUtente = parseInt(prompt("Inserisci un numero da 1 a " + maxRange));
  // Se nUtente è incluso nell'array bombe cambia il valore di nSceltiLength per terminare il ciclo
  if(bombeLista.includes(nUtente)){
    alert("booom!");
    nScelti.length = maxPartite + 1;
  }
  // Se nUtente è incluso nell'array di nScelti o fuori range
  else if(nScelti.includes(nUtente) || nUtente < 1 || nUtente > maxRange || isNaN(nUtente)){
    alert("Numero non valido!");
  }
  // Se nUtente ha superato le validazioni si aggiunge all'array di numeri già scelti
  else{
    nScelti.push(nUtente);
  }
  console.log(nScelti );
}
while(nScelti.length < maxPartite);

if (nScelti.length === maxPartite){
  alert("Hai vinto!");
}
else{
  alert("Hai perso!");
}
// Chiedi all’utente un numero 1-100 fin che l'array nScelti non ha il valore di ciclofinito
