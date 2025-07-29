const pessoa = {
    nome: 'Maria',
    idade: 32,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

// acesso dinâmico
const atributo = 'idade';
console.log(pessoa[atributo]);
console.log(pessoa['nome']); // coleção

pessoa['nome'] = 'José';
console.log(pessoa.nome);