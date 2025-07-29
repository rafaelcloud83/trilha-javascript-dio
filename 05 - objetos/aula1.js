// objeto literal
const pessoa = {
    nome: 'Rafael Ciriaco',
    idade: 42
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

pessoa.altura = 1.70;
console.log(pessoa);

delete pessoa.idade;
console.log(pessoa);

const pessoa2 = {
    nome: 'Maria',
    idade: 32,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa2.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}

pessoa2.descrever();