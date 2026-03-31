// preços dos combustíveis
const preco = {
  gasolina: 6.69,
  etanol: 5.89,
  diesel: 6.20
}

const atualizarValor = () => {
  let tipo = document.getElementById("combustivel").value; // traz os valores
  let litros = document.getElementById("litros").value;
  let precoPorLitro; // atualizar conforme o tipo de combustivel

  switch (tipo) {
    case "gasolina":
      precoPorLitro = preco.gasolina;
      break;
    case "etanol":
      precoPorLitro = preco.etanol;
      break;
    case "diesel":
      precoPorLitro = preco.diesel;
      break;
    default:
      console.log("Escolha uma opção");
      return;
  }
  calcularAbastecimento(precoPorLitro, litros); // chamando a função de abastecimento
};

// função para calcular o preço
const calcularAbastecimento = (precoCombustivel, litros) => {
  let valorTotal = precoCombustivel * litros;

  document.getElementById('resultado').textContent = `R$ ${valorTotal.toFixed(2)}`;
}

let litros = document.getElementById('litros'); // elemento HTML (input);

litros.addEventListener('input', atualizarValor);

litros.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
})

let tipo = document.getElementById('combustivel'); // trazendo o elemento HTML

tipo.addEventListener('change', atualizarValor); // evento ao elemento HTML

