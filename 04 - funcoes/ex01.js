function escreverMeuNome(nome) {
    return `Meu nome é ${nome}`;
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escreverMeuNome('Rafael') + ', Sou maior de idade');
    } else {
        console.log(escreverMeuNome('Rafael') + ', Sou menor de idade');
    }
}

verificarIdade(17);
