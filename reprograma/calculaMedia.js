const Calculo = require('./Calculadora.js');
const media = new Calculo();
 media.on('media', (n1, n2) => {
    let resultado = (n1 + n2)/2
    console.log(`A média dos números é ${resultado}.`)
});
 media.calcular(100,200)