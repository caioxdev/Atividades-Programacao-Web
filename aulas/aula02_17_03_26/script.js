// DOM (document)

// buscar um elemento HTML
let meuElemento = document.getElementById("paragrafo"); // id
console.log(meuElemento);

// trazer o conteúdo
console.log(meuElemento.textContent);

// buscar o elemento pela clase
let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);

// imprimir todo o conteúdo da variável "paragrafos1"
for (let i = 0; i < paragrafo1.length; i++) {
  console.log(paragrafo1[i].textContent);
}

// buscar o elemento pela tag HTML
let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

for (let chave of paragrafo2) {
  console.log(chave.textContent);
}

// criar o elemento HTML dentro da div
let destino = document.getElementById("elemento");
let elementoHTML = document.createElement("p");

elementoHTML.textContent = "Parágrafo criado via JavaScript";
destino.append(elementoHTML); // Adiciona ao DOM


// Criando lista dinâmica
let lista = document.getElementById("lista");
let ul = document.createElement("ul");
let itens = ["Feijão", "Banana", "Arroz", "Suco"];

for (let i = 0; i < itens.length; i++) {
  let li = document.createElement("li");
  li.textContent = itens[i];
  ul.append(li); // Adicionando o li a ul
}
lista.append(ul);

// Algoritmo

const somar = () => {
  const numero2 = Number(document.getElementById("num2").value);
  const numero1 = Number(document.getElementById("num1").value);
  const mostrarNaTela = document.getElementById("result");

  const resultado = numero1 + numero2;
  mostrarNaTela.innerHTML = `O resultado de ${numero1} + ${numero2} é igual a ${resultado}`;
}