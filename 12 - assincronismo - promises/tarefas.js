const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'tarefas.csv');

// const prommisesLeituraArquivo = fs.promises.readFile(filePath);
// prommisesLeituraArquivo
//     .then((arquivo) => arquivo.toString('utf-8'))
//     .then((texto) => texto.split('\n').slice(1))
//     .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
//         const [nome, feito] = linha.split(';')
//         return {
//             nome,
//             feito: feito.trim() === 'true'
//         }
//     }))
//     .then((listaTarefas) => console.log(listaTarefas))
//     .catch((erro) => console.log('Erro ao ler o arquivo:', erro));

// async function lerArquivo() {
//     const arquivo = await fs.promises.readFile(filePath);
//     const textoArquivo = arquivo.toString('utf-8');
//     console.log(textoArquivo);
// }

async function lerArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath);
        const textoArquivo = arquivo.toString('utf-8');
        console.log(textoArquivo);
    } catch (erro) {
        console.log('Erro ao ler o arquivo:', erro);
    } finally {
        console.log('Operação de leitura concluída.');
    }
}

lerArquivo();