/*
1- Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = 1 / gastoMedioKm; // 1 litro para percorrer X km
    }

    calcularGasto(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioKm * precoCombustivel;
    }
}

const meuCarro = new Carro('Fiat', 'branco', 12.0);
let gastoEmReais = meuCarro.calcularGasto(50, 3.67);
console.log(`Meu Carro gastou: R$ ${gastoEmReais.toFixed(2)}`);

const seuCarro = new Carro('Ford', 'preto', 10.0);
gastoEmReais = seuCarro.calcularGasto(50, 3.67);
console.log(`Seu Carro gastou: R$ ${gastoEmReais.toFixed(2)}`);
