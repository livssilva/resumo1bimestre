/*10 pontos
10 – Crie um programa que receba os dados de dez pessoas e calcule a média de altura das
pessoas maiores de idade.
Nome aluno: Lívia Azevedo
*/
const teclado = require(`prompt-sync`)();

let somaAltura: number = 0;
let cont: number = 0;
let totalPessoas: number = 0;

do {
  console.log(`Pessoa ${totalPessoas + 1}:`);
  
  let altura = parseFloat(teclado("Digite sua altura (em metros): "));
  let idade = parseInt(teclado("Digite sua idade: "));

  if (idade >= 18) {
    somaAltura += altura;
    cont++;
  }

  totalPessoas++;
} while (totalPessoas < 10);

let mediaAltura: number;
if (cont > 0) {
  mediaAltura = somaAltura / cont;
} else {
  mediaAltura = 0;
}

console.log("--- Resultados ---");
console.log(`Média de altura das pessoas maiores de idade: ${mediaAltura} metros`);
console.log(`Total de pessoas maiores de idade: ${cont}`);