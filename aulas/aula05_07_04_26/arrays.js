let frutas = ["Maça", "Laranja", 2];
console.log(frutas);
console.log(frutas[2]);

// Métodos de arrays

// adicionar ao final
frutas.push("uva");
console.log(frutas);

// adicionar ao início
frutas.unshift("pêra");
console.log(frutas);

// adicionar em um posição específica
frutas.splice(3, 0, "Limão");
console.log(frutas);

// remoção em um posição específica
// índice/posição, quantidadeRemover
frutas.splice(0, 1); // eliminar o primeiro item
console.log(frutas);