"use strict"

const opcoes = ["tesoura", "pedra", "papel"];

const opcaoComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
console.log(opcaoComputador);
const opcaoJogador =  window.prompt("Pedra, papel ou tesoura?").toLowerCase();

const regras = {
  pedra: "tesoura",
  tesoura: "papel",
  papel: "pedra"
};

if (opcaoJogador === opcaoComputador)
    console.log("Empate");
else if (regras[opcaoJogador] === opcaoComputador) // o que a opção que escolhi vence e o que o computador escolheu
    console.log("Parabéns! Você venceu!");
else
  console.log("Que pena! Você perdeu.");