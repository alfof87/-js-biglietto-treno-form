//il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzoKm = 0.21;
var minCarrozza = 1;
var maxCarrozza = 10;
var minNumTreno = 90000;
var maxNumTreno = 100000;
//sconto del 20% per i minorenni
//var minorenni = prezzoBiglietto - prezzoBiglietto * 0.2;
//va applicato uno sconto del 40% per gli over 65.
//var over65 = prezzoBiglietto - prezzoBiglietto * 0.4;
var prezzoTotale;
var eta;

//var btn = document.getElementById('btn')
var creaBtn = document.getElementById("creaBiglietto");

//if (eta < 18){
 //prezzoTotale = km * prezzoKm - 20/100 * (km * prezzoKm);
//}
//else if (eta > 65){
//prezzoTotale = km * prezzoKm - 40/100 * (km * prezzoKm);
//}
//else {
//prezzoTotale = km * prezzoKm;
//}
creaBtn.addEventListener("click", function (){
 var nome = document.getElementById("nome").value;
 var km = document.getElementById("km").value;
 var categoria = document.getElementById("categoria").value;
 var minCarrozza = 1;
 var maxCarrozza = 10;
 var minNumTreno = 90000;
 var maxNumTreno = 100000;
});

if (categoria == "minorenne"){
 prezzoTotale = km * prezzoKm - 20/100 * (km * prezzoKm);
}
else if (categoria == "maggiorenne"){
prezzoTotale = km * prezzoKm - 40/100 * (km * prezzoKm);
}
else {
prezzoTotale = km * prezzoKm;

}
var numeroTreno = Math.floor(Math.random()*(maxNumTreno-minNumTreno+1))+minNumTreno;
var carrozza = Math.floor(Math.random()*(maxCarrozza-minCarrozza+1))+minCarrozza;

document.getElementById('passeggero').innerHTML = nome;
document.getElementById('numeroTreno').innerHTML = numeroTreno;
document.getElementById('carrozza').innerHTML = carrozza;
document.getElementById('prezzoBiglietto').innerHTML = prezzoTotale;
document.getElementById('categoriaPasseggero').innerHTML = categoria;
//elem.innerHTML="prezzo biglietto: " + prezzoKm.toFixed(2) +"€";

//btn.addEventListener("click", function(){
 //var elem = document.getElementById('nome')
// console.log(elem.value);
//})
