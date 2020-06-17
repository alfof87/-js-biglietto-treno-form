//il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzoKm = 0.21;
var km;
//sconto del 20% per i minorenni
//var minorenni = prezzoBiglietto - prezzoBiglietto * 0.2;
//va applicato uno sconto del 40% per gli over 65.
//var over65 = prezzoBiglietto - prezzoBiglietto * 0.4;
var prezzoTotale;
var eta;
var elem = document.getElementById('nome')



if (eta < 18){
 prezzoTotale = km * prezzoKm - 20/100 * (km * prezzoKm);

}
else if (eta > 65){
prezzoTotale = km * prezzoKm - 40/100 * (km * prezzoKm);
}
else {
prezzoTotale = km * prezzoKm;
}

console.log(elem);











elem.innerHTML="prezzo biglietto: " + prezzoKm.toFixed(2) +"€";
