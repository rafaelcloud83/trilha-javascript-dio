// 2- Crie um programa que seja capaz de percorrer uma lista de números e imprima cada 
// número Par encontrado.

const numeros = [12, 21, 33, 44, 56, 67, 79, 80, 94, 10];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`Número Par encontrado: ${numeros[i]}`);
    } 
}
