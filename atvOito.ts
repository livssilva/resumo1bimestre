/* 10 pontos
8 - Leia a idade e o sexo de 50 pessoas e mostre a média de idade para
cada sexo.
Nome aluno: Lívia Azevedo
*/
const teclado = require(`prompt-sync`)();
let somaIdadeHomem: number = 0;
let somaIdadeMulher: number = 0;
let contHomem: number = 0;
let contMulher: number = 0;

let contador: number = 1; 

while (contador <= 50) {
  console.log(`Pessoa ${contador}:`);

  let idade: number = parseInt(teclado("Digite a idade: "));
  let sexo: string = teclado("Digite o sexo (M para masculino, F para feminino): ")();

  if (sexo === "M") {
    somaIdadeHomem += idade;
    contHomem++;
    contador++;
  } else if (sexo === "F") {
    somaIdadeMulher += idade;
    contMulher++;
    contador++; 
  } else {
    console.log("Sexo inválido. Tente novamente.");
    
  }
}

let mediaIdadeHomem: number;
if (contHomem > 0) {
  mediaIdadeHomem = somaIdadeHomem / contHomem;
} else {
  mediaIdadeHomem = 0;
}

let mediaIdadeMulher: number;
if (contMulher > 0) {
  mediaIdadeMulher = somaIdadeMulher / contMulher;
} else {
  mediaIdadeMulher = 0;
}

console.log(" Resultadoss:");
console.log(`Média de idade dos homens: ${mediaIdadeHomem}`);
console.log(`Média de idade das mulheres: ${mediaIdadeMulher}`);
console.log(``);
console.log(`Total de homens: ${contHomem}`);
console.log(`Total de mulheres: ${contMulher}`);
console.log(``);
console.log(`Total de pessoas: ${contHomem + contMulher}`);
