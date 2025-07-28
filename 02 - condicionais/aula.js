// condicionais
const numero = 10;

const ehNumeroPar = (numero % 2) === 0; 
//const ehNumeroPar = (numero % 2) == 0; // 2 igual ignora o tipo da variável 

if (numero === 0) {
    console.log('O número é zero');
} else if (ehNumeroPar) {
    console.log('O número é par');
} else {
    console.log('O número é ímpar');
}

// not, inverso
if (!ehNumeroPar) {
    console.log('O número é ímpar');
}
