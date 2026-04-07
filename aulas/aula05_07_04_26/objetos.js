// USANDO A SINTAXE LITERAL {}
const pessoa = {
  // consigo ter uma instância desse objeto (pessoa)
  nome: "Fulano",
  idade: 18,
};
console.log(pessoa);

const pessoa2 = {};
pessoa2.nome = "Ciclano";
pessoa2.idade = 12;

console.log(pessoa2);

// USANDO NEW OBJECT()
const veiculo = new Object();
veiculo.marca = "Fiat";
veiculo.ano = 2026;

console.log(veiculo);

// USANDO UMA FUNÇÃO CONSTRUTORA
// constructor
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

// criar múltiplas instâncias de um objeto
const p1 = new Pessoa("João", 30);
const p2 = new Pessoa("Maria", 34);
console.log(p1);
console.log(p2);

// colocar em uma classe
class Animal {
  constructor(tipo, nome) {
    this.tipo = tipo;
    this.nome = nome;
  }
  // métodos
  emitirSom() {
    return `${this. nome} faz um som`;
  }
}

const gato = new Animal("Felino", "Frajola");
console.log(gato.nome); // acessar a propriedade
console.log(gato.emitirSom()); // acessar os métodos

// modificadores de acesso (public e private)
class ContaBancaria {
  // público -> métodos e propriedades que são acessíveis de qualquer lugar
  // privado -> ele não pode ser acessado fora da class ("#")

  // saldo = 0; // propriedade pública
  #saldo = 0; // propriedade privada

  constructor(saldoInicial) { // constructor
    this.#saldo = saldoInicial;
  }

  // métodos
  getSaldo() {
    return this.#saldo;
  }
}

const conta = new ContaBancaria(100); // instancia do objeto
console.log(conta.getSaldo()); // acessando o método do objeto
// console.log(conta.saldo); // undefined
// console.log(conta.#saldo); // erro pq a propriedade é privada