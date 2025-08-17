const promiseNumeroQualquer = new Promise((resolve, reject) => {
    // const numero = parseInt(Math.random() * 100);
    // resolve(numero);
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100);
    resolve(numero);
    }, 1000);
});

console.log('Iniciando a geração do número aleatório...');

promiseNumeroQualquer
    .then((value) => {
        console.log(`O número gerado foi: ${value}`)
        return value + 10;
    })
    .then((value) => {
        console.log(`O número gerado mais 10 é: ${value}`)
    })
    .catch((error) => {
        console.error(`Erro: ${error}`)
    })
    .finally(() => {
        console.log('Operação finalizada.')
});