const tariffaKm = 0.21;
const inputPercorrenza = parseInt(prompt('Inserire la percorrenza (km): '));
const inputEta = parseInt(prompt("Inserire l'età del passeggero: ")) ;

let msg;
let prezzo;

// Verifica se valore è numerico
if (isNaN(inputPercorrenza) || isNaN(inputEta)){
    msg = "ERRORE: Valori in input non numerici.";
    console.log("ERRORE: Valori in input non numerici.");
} else {
    prezzo = inputPercorrenza * tariffaKm;
}


// Verifica se valore in input non è negativo
// e se sia applicabile lo sconto
if ((inputEta < 18) && (inputEta > 0) && (inputPercorrenza > 0)){

    msg = 'Buone notizie: hai diritto allo sconto under 18!';
    prezzo -= (prezzo * 0.2); 

} else if ((inputEta >= 65) && (inputPercorrenza > 0)) {

    msg = 'Buone notizie: hai diritto allo sconto senior!';
    prezzo -= (prezzo * 0.4); 

} else if ((inputEta >= 18) && (inputEta < 65) && (inputPercorrenza > 0)) {

    msg = 'Nessuno sconto applicabile';

} else {
    msg = "ERRORE: L'età e la percorrenza non possono essere zero.";
    prezzo = null;
}


// Arrotonda il prezzo a due decimali
if(prezzo > 0){
    prezzo = parseFloat(prezzo.toFixed(2));
    document.getElementById('priceBox').innerHTML = prezzo;
}

if (msg != null){
    document.getElementById('msgBox').innerHTML = msg;
}


