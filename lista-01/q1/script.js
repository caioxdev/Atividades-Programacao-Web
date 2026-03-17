/*
Crie um jogo onde o computador gera um número aleatório de 1 a 20, e o usuário
precisa adivinhar qual é. O jogo deve dar dicas se o número digitado for maior ou menor
que o número secreto. O jogo só termina quando o usuário acertar.
*/

const input = document.getElementById("input");
const button = document.getElementById("button");
const paragrafo = document.getElementById("paragrafo");

//                                Math.random() * (max - min + 1) + min
const numeroSorteado = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

let numeroTentativas = 0;

const adivinharNumero = () => {
  const valorInput = Number(input.value.trim());

  if (valorInput < 1 || valorInput > 20 || input.value.trim() === "") {
    paragrafo.textContent = "Digite um número entre 1 e 20";
  } else {
    numeroTentativas++;

    if (valorInput > numeroSorteado) {
      paragrafo.textContent = "É menor";
    } else if (valorInput === numeroSorteado) {
      paragrafo.textContent = `Parabéns! Você acertou em ${numeroTentativas} tentativa(s)`;
      input.disabled = true;
      button.disabled = true;
    } else {
      paragrafo.textContent = "É maior";
    }
  }
  input.value = "";
  input.focus();
};

button.addEventListener("click", adivinharNumero);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    adivinharNumero();
  }
});