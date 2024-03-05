
const nameElement = document.getElementById('name'); //element
console.log(nameElement)

const distanzaElement = document.getElementById('distanza'); // element
console.log(distanzaElement)

const etaElement = document.getElementById('eta'); // element
console.log(etaElement)

const submitElement = document.getElementById('submit') // element
console.dir(submitElement)

submitElement.addEventListener('click', function () {

    //PREZZO INTERO
    let km = parseFloat(distanzaElement.value); // float
    let prezzo = km * 0.21; // float

    let eta = etaElement.value; // string

    //APPLICARE UNO SCONTO PER GLI OVER 65
    let prezzoOver = prezzo * 0.4; //number
    let prezzoScontatoOver = prezzo - prezzoOver;

    //APPLICARE UNO SCONTO PER I MINORENNI
    let prezzoMino = (prezzo * 0.2); //number
    let prezzoScontatoMino = prezzo - prezzoMino;
   

    //VALIDAZIONI
    if (etaElement.value === 'over65') {
        console.log('biglietto scontato del 40%:' + prezzoScontatoOver.toFixed(2));
        document.getElementById('risultato').innerHTML = prezzoScontatoOver.toFixed(2)
        document.getElementById('tipo').innerHTML = 'biglietto over 65'
        document.getElementById('carrozza').innerHTML = '5'
        document.getElementById('passeggero').innerHTML = nameElement.value
    } else if (etaElement.value === 'minorenne') {
        console.log('biglietto scontato del 20%: ' + prezzoScontatoMino.toFixed(2));
        document.getElementById('risultato').innerHTML = prezzoScontatoMino.toFixed(2)
        document.getElementById('tipo').innerHTML = 'biglietto under 18'
        document.getElementById('carrozza').innerHTML = '2'
        document.getElementById('passeggero').innerHTML = nameElement.value
    } else {
        console.log('prezzo pieno del biglietto:' + prezzo.toFixed(2));
        document.getElementById('risultato').innerHTML = prezzo.toFixed(2);
        document.getElementById('tipo').innerHTML = 'biglietto standard'
        document.getElementById('carrozza').innerHTML = '8'
        document.getElementById('passeggero').innerHTML = nameElement.value
    }


})
