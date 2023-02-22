const tariffaKm = 0.21;
const inputPercorrenza = parseInt(prompt('Inserire la percorrenza (km): '));
const inputEta = parseInt(prompt("Inserire l'età del passeggero: ")) ;

let msg;
let prezzo;


if (isNaN(inputPercorrenza) || isNaN(inputEta)){
    msg = "ERRORE: Valori in input non numerici.";
    console.log("ERRORE: Valori in input non numerici.");
} else {
    prezzo = inputPercorrenza * tariffaKm;
}


if (inputEta < 18){

    msg = 'Buone notizie: hai diritto allo sconto under 18!';
    prezzo -= (prezzo * 0.2); 

} else if (inputEta >= 65) {

    msg = 'Buone notizie: hai diritto allo sconto senior!';
    prezzo -= (prezzo * 0.4); 
}

if(prezzo > 0){
    prezzo = prezzo.toFixed(2);
    document.getElementById('priceBox').innerHTML = prezzo;
}

if (msg != null){
    document.getElementById('msgBox').innerHTML = msg;
}


