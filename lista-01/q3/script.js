const input = document.querySelector("input");
const button = document.querySelector("button");
const tabela = document.querySelector("#tabela tbody");
const tabelaCompleta = document.querySelector("#tabela");

function gerarTabuada() {
  const numero = Number(input.value.trim());

  if (!numero) {
    alert("Digite um número válido!");
    return;
  }

  const linhas = tabela.querySelectorAll("tr");

  linhas.forEach((linha, index) => {
    const multiplicador = index + 1;
    linha.children[0].textContent = `${numero} x ${multiplicador}`;
    linha.children[1].textContent = numero * multiplicador;
  });
  tabelaCompleta.style.display = "table";
  input.value = "";
  input.focus();
}

button.addEventListener("click", gerarTabuada);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    gerarTabuada();
  }
});