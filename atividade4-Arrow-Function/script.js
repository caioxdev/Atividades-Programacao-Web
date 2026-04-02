let litros = document.getElementById('litros'); // elemento HTML (input);
let form = document.querySelector('form');
let tipo = document.getElementById('combustivel'); // trazendo o elemento HTML

// preços dos combustíveis
const preco = {
  gasolina: 6.69,
  etanol: 5.89,
  diesel: 6.20
}

// Função para formatar a moeda
const formatarMoeda = (valor, local = 'pt-br', moeda = 'BRL') => {
  return new Intl.NumberFormat(local, {
    currency: moeda,
    style: 'currency'
  }).format(valor);
}

// função para calcular o preço
const calcularAbastecimento = (precoCombustivel, litros) => {
  let valorTotal = precoCombustivel * litros;

  document.getElementById('resultado').textContent = formatarMoeda(valorTotal);
}

const atualizarValor = () => {
  let tipo = document.getElementById("combustivel").value; // traz os valores
  let litros = document.getElementById("litros").value; // input para digitar o litro
  let litrosNumero = Number(litros);
  let precoPorLitro; // atualizar conforme o tipo de combustivel

  if (litros === '' || tipo === '') {
    alert('Tem campo(s) vazios, verifique!');
    return;
  }

  if (isNaN(litrosNumero) || litrosNumero <= 0) {
    alert('Digite um valor válido e maior que zero!');
    return;
  }

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
  calcularAbastecimento(precoPorLitro, litrosNumero); // chamando a função de abastecimento
};

litros.addEventListener('input', atualizarValor);

tipo.addEventListener('change', atualizarValor); // evento ao elemento HTML

form.addEventListener('submit', (event) => event.preventDefault());