// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(num1, num2) {
    const somma = num1 + num2;
    return console.log(somma)
}
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

const funzioneSomma = function (num1, num2) {
    const somma = num1 + num2;
    return console.log(somma)
}

somma(2, 16)