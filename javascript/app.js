
const nameElement = document.getElementById('name');
console.log(nameElement)

const distanzaElement = document.getElementById('distanza'); // element
console.log(distanzaElement)

const etaElement = document.getElementById('eta'); // element
console.log(etaElement.value)

const submitElement = document.getElementById('submit')
console.dir(submitElement)

submitElement.addEventListener('click', function () {

    let km = parseFloat(distanzaElement.value); // float
    //PREZZO INTERO
    let prezzo = km * 0.21; // float

    let eta = etaElement.value; // string

    //APPLICARE UNO SCONTO PER GLI OVER 65
    let prezzoOver = prezzo * 0.4; //number
    let prezzoScontatoOver = prezzo - prezzoOver;

    //APPLICARE UNO SCONTO PER I MINORENNI
    let prezzoMino = parseFloat(prezzo * 0.2); //number
    let prezzoScontatoMino = prezzo - prezzoMino;

    //VALIDAZIONI
    if (etaElement.value === 'over65') {
        console.log('biglietto scontato del 40%:' + prezzoScontatoOver.toFixed(2));
    } else if (etaElement.value === 'minorenne') {
        console.log('biglietto scontato del 20%: ' + prezzoScontatoMino.toFixed(2));
    } else {
        console.log('prezzo pieno del biglietto:' + prezzo.toFixed(2));
        document.getElementById('risultato').innerHTML = 'prezzo pieno del biglietto:' + prezzo.toFixed(2);
    }
})
