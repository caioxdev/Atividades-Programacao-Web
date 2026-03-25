// 1 - Contador de Click
const botao1 = document.getElementById("incrementar");
const botao2 = document.getElementById("decrementar");
const resultado = document.getElementById("result");

let contador = 0;

const contadorDeClick = (valor) => {
  contador += valor;
  resultado.innerHTML = contador;
}

botao1.addEventListener("click", () => {
  contadorDeClick(1);
});

botao2.addEventListener("click", () => {
  if (contador > 0) {
    contadorDeClick(-1);
  } else {
    alert("O contador chegou em 0!");
  }
});

// 2 - Adicionar texto dinâmico
const input1 = document.getElementById("texto-dinamico");
const textoCaracteres = document.getElementById("texto-caracteres");

const adicionarTexto = () => {
  let numCaracteres = input1.value.replace(/\s/g, "");
  textoCaracteres.innerHTML = numCaracteres.length;
}

input1.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    adicionarTexto();
  }
});