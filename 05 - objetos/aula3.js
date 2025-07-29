// classes - é a definição de um molde para criar objetos
class Pessoa {
    // propriedades
    nome;
    idade;

    // método
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

// instâncias - é a criação de objetos a partir da classe
const pessoa = new Pessoa();
pessoa.nome = 'Maria';
pessoa.idade = 30;
pessoa.descrever();
console.log(pessoa);

const pessoa1 = new Pessoa();
pessoa1.nome = 'José';
pessoa1.idade = 35;
pessoa1.descrever();
console.log(pessoa1);
