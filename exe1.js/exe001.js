/* Obtenha dados da altura e o sexo (M ou F) de 15 pessoas e apresente os seguintes resultados: - A maior e a menor altura do grupo; - A média de altura dos homens; - O número de mulheres.*/


// Cria um array para armazenar os dados das pessoas
const pessoas = [];

// Adiciona 15 objetos com as propriedades 'altura' e 'sexo' ao array
for (let i = 0; i < 15; i++) {
  const altura = parseInt(prompt(`Digite a altura da pessoa ${i+1}:`));
  const sexo = prompt(`Digite o sexo da pessoa ${i+1} (M ou F):`);
  pessoas.push({ altura, sexo });
}

// Encontra a maior e a menor altura do grupo
let maiorAltura = 0;
let menorAltura = Infinity;
for (const pessoa of pessoas) {
  if (pessoa.altura > maiorAltura) {
    maiorAltura = pessoa.altura;
  }
  if (pessoa.altura < menorAltura) {
    menorAltura = pessoa.altura;
  }
}
console.log(`Maior altura do grupo: ${maiorAltura}`);
console.log(`Menor altura do grupo: ${menorAltura}`);

// Calcula a média de altura dos homens e o número de mulheres
let totalAlturaHomens = 0;
let quantidadeHomens = 0;
let quantidadeMulheres = 0;
for (const pessoa of pessoas) {
  if (pessoa.sexo === 'M') {
    totalAlturaHomens += pessoa.altura;
    quantidadeHomens++;
  } else if (pessoa.sexo === 'F') {
    quantidadeMulheres++;
  }
}
const mediaAlturaHomens = totalAlturaHomens / quantidadeHomens;
console.log(`Média de altura dos homens: ${mediaAlturaHomens}`);
console.log(`Número de mulheres: ${quantidadeMulheres}`);