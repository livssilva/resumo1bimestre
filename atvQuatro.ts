/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno: Lívia Azevedo
*/
const teclado = require("prompt-sync")();

let soma: number = 0;
let quantidade: number = 0;
let opcao: number;

do {
  console.log("1 - Adicionar número");
  console.log("2 - Calcular média e sair");
  opcao = parseInt(teclado("Digite a opção desejada: "));
  console.clear();

  if (opcao === 1) {
    const numero = parseFloat(teclado("Digite um número: "));
    soma += numero;
    quantidade++;
  } else if (opcao != 2) {
    console.log("Opção inválida. Tente novamente.");
  }
} while (opcao != 2);
if (quantidade > 0) {
  const media = soma / quantidade;
  console.log(`Média dos números digitados: ${media}`);
} else {
  console.log("Não é possível calcular a média.");
}
