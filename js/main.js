const tariffaKm = 0.21;
let msg;

const inputPercorrenza = parseInt(prompt('Inserire i KM: '));
const inputEta = parseInt(prompt("Inserire l'età del passeggero: ")) ;


if (isNaN(inputPercorrenza) || isNaN(inputEta)){
    console.log("ERRORE: Valori in input non numerici.");
}


let prezzo = inputPercorrenza * tariffaKm;

if (inputEta < 18){

    msg = 'Hai diritto allo sconto under 18!';
    prezzo -= (prezzo * 0.2); 

} else if (inputEta >= 65) {

    msg = 'Hai diritto allo sconto senior!';
    prezzo -= (prezzo * 0.4); 
}


console.log(prezzo);