const n = Number(prompt("Digite a quantidade de termos:"));

let numero = 0;
let soma = 0;
let sequencia = "";

for (let i = 1; i <= n; i++) {
  numero = numero * 10 + 1;
  soma += numero;

  sequencia += numero;
  if (i < n) {
    sequencia += " + ";
  }
}

console.log(sequencia);
console.log(`A soma é ${soma}`);