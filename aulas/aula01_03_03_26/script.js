"use strict";

// VARIÁVEIS
var valor1 = "gato"
console.log(valor1);;

let valor2 = "Fulano da Silva";
console.log(valor2);

const valor3 = 10;

// REATRIBUIÇÃO
valor1 = "peixe";
console.log(valor1);

// TIPOS DE VARIÁVEIS
console.log(typeof valor1);
console.log(typeof valor3);

// OPERADORES ARITMÉTICOS
// + - * /
const num1 = 10;
const num2 = 20;
const soma = num1 + num2;

// OPERADORES DE COMPARAÇÃO
// == === != !== > >= < <=
console.log("5" === 5);

// ALGORITMO: entrada - processamento - saída
/*
let nome = window.prompt("Digite seu nome");
let idade = window.prompt("Digite sua idade");
 */

// template literal
/*
console.log(`Seja bem-vindo ${nome} é você possui ${idade} anos`);
document.write(`Seja bem-vindo ${nome} é você possui ${idade} anos`);
*/

/*
Criar um sistema que soma 2 números, o usuário vai digitar
2 números. E mostrar o resultado
*/

let numero1 = Number(window.prompt("Digite o primeiro número"));
let numero2 = Number(window.prompt("Digite o segundo número"));

document.write(`${numero1} + ${numero2} = ${numero1 + numero2}`);