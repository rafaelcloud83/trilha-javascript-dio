const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);

console.log(notas.length); // Exibe o tamanho do array

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota; // Soma todas as notas
    //soma += nota; // Outra forma de somar
}

const media = soma / notas.length; // Calcula a média
console.log(media); // Exibe a média
