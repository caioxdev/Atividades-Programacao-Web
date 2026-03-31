// trazer o elemento HTML
let button1 = document.getElementById("botao1");

// Manipulador = clique simples
button1.onclick = function () {
  alert("Primeiro Evento");
};

button1.onclick = function () {
  alert("Segundo Evento");
};

let button2 = document.getElementById("botao2");
botao2.onmouseover = function () {
  botao2.style.backgroundColor = "red";
};

botao2.onmouseout = function () {
  botao2.style.backgroundColor = "";
};

botao2.ondblclick = function () {
  botao2.textContent = "Duplo Clique";
};

// Evento - teclado
let campoEntrada = document.getElementById("campoEntrada");
let resultado = document.getElementById("resultado");

campoEntrada.onkeydown = function (event) {
  if (event.key === "Enter") {
    resultado.innerHTML = campoEntrada.value;
    campoEntrada.value = '';
  }
};

// addEventListener
let botao3 = document.getElementById("botao3");
let mensagem1 = document.getElementById("mensagem1");
let mensagem2 = document.getElementById("mensagem2");

botao3.addEventListener("click", () => {
  mensagem1.textContent = 'primeiro evento';
});

botao3.addEventListener("click", () => {
  mensagem2.textContent = 'segundo evento';
});

let caixa = document.getElementById("caixa");
let area = document.getElementById("area");

// Permite o arastar do elemento
caixa.addEventListener("dragstart", () => {
  console.log("arrastando o objeto");
});

// Soltar o objeto
area.addEventListener("dragover", (event) => {
  event.preventDefault();
});

// Adicionar o elemento
area.addEventListener("drop", () => {
  area.appendChild(caixa);
});