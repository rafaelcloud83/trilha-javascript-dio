class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2025 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const pessoa = new Pessoa('Maria', 35);
pessoa.descrever();
console.log(pessoa);

const pessoa1 = new Pessoa('José', 28);
pessoa1.descrever();
console.log(pessoa1);
