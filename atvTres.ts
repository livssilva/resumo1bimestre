/*10 pontos
3 - Faça um algoritmo que leia um valor e informe se ele está dentro de
um intervalo específico (por exemplo, entre 10 e 20, 20 e 30, até o 100).
Nome Aluno: Lívia Azevedo
*/
const teclado = require("prompt-sync")();
console.log("Algoritmo criado para informar o intervalo específico de um número.");

let numb = parseFloat(teclado("Digite o número: "));
console.clear();

if (numb >= 10 && numb < 20) {
  console.log("O número informado está entre 10 e 20.");
} else if (numb >= 20 && numb < 30) {
  console.log("O número informado está entre 20 e 30.");
} else if (numb >= 30 && numb < 40) {
  console.log("O número informado está entre 30 e 40.");
} else if (numb >= 40 && numb < 50) {
  console.log("O número informado está entre 40 e 50.");
} else if (numb >= 50 && numb < 60) {
  console.log("O número informado está entre 50 e 60.");
} else if (numb >= 60 && numb < 70) {
  console.log("O número informado está entre 60 e 70.");
} else if (numb >= 70 && numb < 80) {
  console.log("O número informado está entre 70 e 80.");
} else if (numb >= 80 && numb < 90) {
  console.log("O número informado está entre 80 e 90.");
} else if (numb >= 90 && numb <= 100) {
  console.log("O número informado está entre 90 e 100.");
} else {
  console.log(
    "O número informado está fora dos intervalos considerados (10 a 100)."
  );
}



