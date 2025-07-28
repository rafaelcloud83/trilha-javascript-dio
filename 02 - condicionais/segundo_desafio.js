/*
Faça um programa para calcular o valor de uma viagem.
Você terá 5 variáveis. Sendo elas:
- Preço do etanol;
- Preço da gasolina;
- Tipo de combustível que está no carro;
- Gasto médio de combustível do carro por KM;
- Distância em KM da viagem.
*/

const precoEtanol = 3.67; // preço etanol
const precoGasolina = 5.69; // preço gasolina
const tipoCombustivel = 'gasolina'; // tipo de combustível: 'etanol' ou 'gasolina'
let gastoMedio; // km por litro
const distanciaKm = 250.0; // distância em km
let valorViagem; // valor da viagem

if (tipoCombustivel === 'etanol') {
    gastoMedio = 10.0;
    valorViagem = (distanciaKm / gastoMedio) * precoEtanol;
} else {
    gastoMedio = 13.0;
    valorViagem = (distanciaKm / gastoMedio) * precoGasolina;
} 

console.log(`O valor da viagem é R$ ${valorViagem.toFixed(2)}`);
