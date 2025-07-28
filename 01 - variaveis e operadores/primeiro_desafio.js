/*
Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis. Sendo elas:
- Preço do combustível;
- Gasto médio de combustível do carro por KM;
- Distância em KM da viagem.
*/
const precoCombustivel = 3.67; // preço etanol
const gastoMedio = 10.0; // km por litro
const distanciaKm = 250.0; // distância em km

const valorViagem = (distanciaKm / gastoMedio) * precoCombustivel;

console.log(valorViagem.toFixed(2));
console.log(`O valor da viagem é R$ ${valorViagem.toFixed(2)}`);
