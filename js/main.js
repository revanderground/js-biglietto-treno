
// Chiediamo all'utente di inserire la distanza in KM che intende percorrere e l'età,  e li convertiamo a numeri interi attraverso parseInt()
const userDistance = parseInt(prompt('Inserisci la distanza in Km che vuoi percorrere'));
const userAge = parseInt(prompt('Inserisci la tua età'));
let price = (userDistance * 0.21);
let finalPrice;
console.log(`Distanza in KM: ${userDistance}, Età: ${userAge}`);

// Controllo se i valori inseriti siano stati convertiti a interi con successo
if ( isNaN(userDistance) == true) {
    alert('Valore errato: Ricarica la pagina ed inserisci un numero intero');
} else if (isNaN(userAge) == true ) {
    alert('Valore errato: Ricarica la pagina ed inserisci un numero intero');
} else if (userAge < 18){
    // Calcolo con lo sconto del 20% per minorenni
    let priceU18 = price - ((price * 20) / 100);
    priceU18=(Math.round(priceU18 * 100)/100).toFixed(2);
    console.log(`Il prezzo del biglietto scontato del 20% è ${priceU18}`);
    finalPrice = priceU18;
    // Calcolo con lo sconto del 40% per over65
} else if (userAge > 65) {
    let price65Plus = price - ((price * 40) / 100);
    price65Plus=(Math.round(price65Plus * 100)/100).toFixed(2);
    console.log(`Il prezzo del biglietto scontato del 40% è ${price65Plus}`);
    // Prezzo standard
    finalPrice = price65Plus;
} else {
    price=(Math.round(price * 100)/100).toFixed(2);
    console.log(`Il prezzo del biglietto standard è ${price}`);
    finalPrice = price;
}
                
document.getElementById('user-distance').innerHTML = userDistance;
document.getElementById('user-age').innerHTML = userAge;
document.getElementById('final-price').innerHTML = finalPrice;
          

    