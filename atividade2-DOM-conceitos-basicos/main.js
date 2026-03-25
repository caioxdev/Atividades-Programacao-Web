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

// Vai contar os caracteres
const input1 = document.getElementById("texto-dinamico");
const textoCaracteres = document.getElementById("texto-caracteres");
const lista = document.getElementById("lista");
const ul = document.createElement("ul");

lista.appendChild(ul);
ul.style.listStyle = 'none';
ul.style.padding = '0';
ul.style.textAlign = 'left';

const contarCaractere = () => {
  let numCaracteres = input1.value.replace(/\s/g, "");
  textoCaracteres.innerHTML = numCaracteres.length;
}

// Vai adicionar um item em ul quando apertar Enter
const adicionarTexto = () => {
  let valorInput = input1.value;
  const item = document.createElement("li");

  item.textContent = valorInput;
  ul.appendChild(item);

  input1.value = "";
  textoCaracteres.innerHTML = "";
}

input1.addEventListener("input", contarCaractere);
input1.addEventListener("keydown", (e) => {
  e.key === "Enter" ? adicionarTexto() : null;
});
