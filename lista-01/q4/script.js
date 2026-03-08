/*
Crie um programa que desenha um triângulo de asteriscos (*) no console, onde o
número de linhas é especificado pelo usuário.
Exemplo de saída:
Se o usuário digitar 5 para o número de linhas, o resultado será:
*
**
***
****
*****
*/

const numero = Number(window.prompt("Digite um número"));

for (let i = 1; i <= numero; i++) {
  console.log("*".repeat(i));
}