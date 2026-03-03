// SNACK 1
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// function somma(num1, num2) {
//     return num1 + num2;
// }
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

// const funzioneSomma = function (num1, num2) {
//     const somma = num1 + num2;
//     return somma
// }
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
// const funzioneSomma2 = (num1, num2) => num1 + num2; 

// console.log(somma(2, 16))
// console.log(funzioneSomma(2,16));
// console.log(funzioneSomma2(2,16))

// SNACK2

// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
// const numQuadrato = (num) => num ** 2;
// console.log(numQuadrato(50));

// SNACK 3


// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma = (a, b) => a + b;
const sottrazione = (a, b) => a - b;
const moltiplicazione = (a, b) => a * b;
const divisione = (a, b) => a / b;

const eseguiOperazione = (operazione, a, b) => operazione(a, b);

console.log(eseguiOperazione(somma, 4, 5));
console.log(eseguiOperazione(sottrazione, 4, 5));
console.log(eseguiOperazione(moltiplicazione, 4, 5));
console.log(eseguiOperazione(divisione, 20, 5));
// SNACK 4
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

// function creaTimer(tempo) {
//     return setTimeout(() => console.log("Tempo scaduto!"), tempo)

// }

// console.log(creaTimer(5000));

//SNACK 5 

// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
function creaMessaggio(string){
    setInterval(()=> console.log(`${string}`),1000)
}

// console.log(creaMessaggio("ciao a tutti"))

//SNACK 6

// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
let constatore = 0;
function creaContatoreAutomatico (tempo){
    return setInterval(()=>{
        constatore++
        console.log(constatore);
    },tempo)
}

// creaContatoreAutomatico(10000);

//SNACK 7

// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

const eseguiEferma =(string,play,stop) => {
     const ripetizione = setInterval(()=>{
        console.log(string)
     },play);
     setTimeout(()=>{
        clearInterval(ripetizione)
        

     },stop)
}

eseguiEferma("ciao", 1000, 10000);