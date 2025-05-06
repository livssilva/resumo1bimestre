/*10 pontos
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno: Lívia Azevedo
*/
const teclado = require('prompt-sync')();
console.log("Bem-Vindo ao aplicativo que analisa e organiza as notas!")
let nota1: number = parseInt(teclado("Digite a primeira nota: "));
let nota2: number = parseInt(teclado("Digite a segunda nota: "));
let nota3: number = parseInt(teclado("Digite a terceira nota: "));
let nota4: number = parseInt(teclado("Digite a quarta nota: "));
let nota5: number = parseInt(teclado("Digite a quinta nota: "));
let maior: number = nota1;
let menor: number = nota1;
let soma: number = nota1;

if (nota2 > maior) maior = nota2;
if (nota2 < menor) menor = nota2;
soma += nota2;

if (nota3 > maior) maior = nota3;
if (nota3 < menor) menor = nota3;
soma += nota3;

if (nota4 > maior) maior = nota4;
if (nota4 < menor) menor = nota4;
soma += nota4;

if (nota5 > maior) maior = nota5;
if (nota5 < menor) menor = nota5;
soma += nota5;

let media: number = soma / 5;

console.log(`Maior nota:, ${maior}`);
console.log(`Menor nota:, ${menor}`);
console.log(`Média das notas, ${media}`);
