/*
Uma sala contém 5 alunos e para cada aluno foi sorteada um número de 1 a 1000. Faça um 
programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Entrada
5
50
10
98
23

Saída
98
*/

/*
const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
}
print(numerosSorteados);

let maiorNumero = 0;
for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorNumero) {
        maiorNumero = numeroSorteado;
    }
}
print(maiorNumero);
*/

const { gets, print } = require('./funcoes-auxiliares');

const quantidadeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);
