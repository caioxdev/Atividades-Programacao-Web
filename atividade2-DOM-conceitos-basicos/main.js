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
const listaOrdenada = document.createElement("ul");

lista.appendChild(listaOrdenada);

listaOrdenada.style.listStyle = 'none';
listaOrdenada.style.padding = '0';
listaOrdenada.style.textAlign = 'left';

const contarCaractere = () => {
  let numCaracteres = input1.value.replace(/\s/g, "");
  textoCaracteres.innerHTML = numCaracteres.length;
}

// Vai adicionar um item em ul quando apertar Enter
const adicionarTexto = () => {
  let valorInput = input1.value;
  const item = document.createElement("li");

  item.textContent = valorInput;
  listaOrdenada.appendChild(item);

  input1.value = "";
  textoCaracteres.innerHTML = "";
}

input1.addEventListener("input", contarCaractere);
input1.addEventListener("keydown", (e) => {
  e.key === "Enter" ? adicionarTexto() : null;
});

// 3 - Escolher tipo de lista
const escolherLista = document.getElementById("escolher-lista"); // select
const mostrarLista = document.getElementById("mostrarLista"); // div
const btnAdicionarLista = document.getElementById("btn-add-lista");

const itens = ["item1", "item2", "item3"];

const ol = document.createElement("ol");
const ul = document.createElement("ul");

lista.appendChild(ul);

const mostrarTipoQualListaSelecionada = () => {
  switch (escolherLista.value) {
    case "ol":
      for (let i = 0; i < itens.length; i++) {
        const li = document.createElement("li");

        li.textContent = itens[i];
        ol.appendChild(li);
      }
      mostrarLista.appendChild(ol);
      break;
    case "ul":
      for (let i = 0; i < itens.length; i++) {
        const li = document.createElement("li");

        li.textContent = itens[i];
        ul.appendChild(li);
      }
      mostrarLista.appendChild(ul);
      break;
    default:
      break;
  }
}
btnAdicionarLista.addEventListener("click", mostrarTipoQualListaSelecionada);

// Resetar tudo
const btnResetar = document.getElementById("btn-resetar");

// 1 - limpar o resultado do incrementar e decrementar
const resetarIncrementarDecrementar = () => {
  resultado.innerHTML = "";
}

// 2 - limpar o input, contador e lista adicionada
const resetarInputContadorItens = () => {
  // limpar input
  input1.value = "";

  // limpar contador
  textoCaracteres.innerHTML = "";

  // limpar lista
  lista.textContent = "";
}

// 3 - limpar a escolha do selected e a lista que foi escolhida
const resetarSelectedLista = () => {
  // limpar a escolha do selected
  escolherLista.selectedIndex = 0;

  // limpar a lista que foi escolhida
  mostrarLista.innerHTML = "";

}
const resetarTudo = () => {
  resetarIncrementarDecrementar();
  resetarInputContadorItens();
  resetarSelectedLista();
}

btnResetar.addEventListener("click", resetarTudo);