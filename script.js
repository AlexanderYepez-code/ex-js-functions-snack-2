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

//  function creaTimer(tempo) {
//     return ()=>{
//         setTimeout(() => console.log("Tempo scaduto!"), tempo)
//     }

// }
// const timer3s= creaTimer(3000)
// timer3s()

//SNACK 5 

// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
function creaMessaggio(string) {
    setInterval(() => console.log(string), 1000)
}

// creaMessaggio("ciao a tutti")

//SNACK 6

// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

// function creaContatoreAutomatico(tempo) {
//     let count = 0;
//     return () => {
//         setInterval(() => {
//             count++
//             console.log(count);
//         }, tempo)
//     }
// }

// const constatoreOgni5 = creaContatoreAutomatico(5000);
// constatoreOgni5();

//SNACK 7

// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

// const eseguiEferma =(string,play,stop) => {
//      const ripetizione = setInterval(()=>{
//         console.log(string)
//      },play);
//      setTimeout(()=>{
//         clearInterval(ripetizione)


//      },stop)
// }

// eseguiEferma("ciao", 1000, 10000);

//Bonus SNACK 8


// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

// const contoAllaRovescia = (n) => {
//     const contatore = setInterval(() => {
//         n--
//         console.log(n)
//         if (n < 0){
//         clearInterval(contatore);
//         console.log("Tempo Scaduto")
//     }
//     }, 1000);




// }

// const contoAllaRovescia = (n) => {
//     const contatore = setInterval(() => {
//         if (n <= 0) {
//             console.log("Tempo scaduto!");
//             clearInterval(contatore)
//         } else {
//             console.log(n)
//             n--
//         }
//     }, 1000)
// }
// console.log(contoAllaRovescia(10))

//Bonus Snack 9

// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.



// function sequenzaOperazioni(operazioni, intervallo) {
//     operazioni.forEach((operazione,index)=>{
//         setTimeout(()=>{
//             operazione();

//         },intervallo * index)
//     })
// }

// sequenzaOperazioni([
//   () => console.log("Operazione 1"),
//   () => console.log("Operazione 2"),
//   () => console.log("Operazione 3")
// ], 2000);

//Bonus Snack 10
// Creare un throttler per limitare l’esecuzione di una funzione
// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

function creaThrottler(callback, limite){
    let ultimaEsecuzione = 0;
    return function(...args){
        const ora = Date.now();
        if(ora-  ultimaEsecuzione >= limite){
            ultimaEsecuzione= ora;
            callback(...args)
        }else{
            console.log("Non eseguito")
        }
    }
}




const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)

