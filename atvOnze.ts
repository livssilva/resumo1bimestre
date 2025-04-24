/*10 pontos
11 – Simule a compra de um carro com as seguintes condições:
Exiba no prompt uma lista com 4 modelos de carros, cada um com um valor fixo.
O usuário deve escolher um dos carros disponíveis e selecionar a forma de pagamento:
 À vista: aplicar um desconto de 15% sobre o valor do carro.
 Parcelado: aplicar um acréscimo de 13% sobre o valor do carro.
Ao final, exiba o valor final da compra de acordo com a escolha do usuário.
Nome Aluno: Lívia Azevedo
*/
const teclado = require('prompt-sync')();

const civic = 50000;
const kicks = 60000;
const up = 70000;
const fordka = 80000;

let descontoavista = 0.15;
let acrescimo = 1.13;
let valorcarro = 0;

console.log("----------------------------------------------");
console.log("Escolha um dos modelos de carro:");
console.log("1 - Honda Civic: R$ 50.000,00");
console.log("2 - Nissan Kicks: R$ 60.000,00");
console.log("3 - Volkswagen Up: R$ 70.000,00");
console.log("4 - Ford Ka: R$ 80.000,00");
console.log("----------------------------------------------");

let opcao: number = parseInt(teclado("Digite o número do modelo desejado: "));

if (opcao == 1) {
    valorcarro = civic;
} else if (opcao == 2) {
    valorcarro = kicks;
} else if (opcao == 3) {
    valorcarro = up;
} else if (opcao == 4) {
    valorcarro = fordka;
} else {
    console.log("Opção inválida. Tente novamente.");
}

if (valorcarro > 0) 
    console.log("----------------------------------------------");
    console.log("Escolha a forma de pagamento:");
    console.log("1 - À vista");
    console.log("2 - Parcelado");
    console.log("----------------------------------------------");

    let formaPagamento: number = parseInt(teclado("Digite o número da forma de pagamento desejada: "));

    if (formaPagamento == 1) {
        valorcarro = valorcarro - (valorcarro * descontoavista);
        console.log(`O valor do carro com desconto é: R$ ${valorcarro.toFixed(2)}`);
    } else if (formaPagamento == 2) {
        valorcarro = valorcarro * acrescimo;
        console.log(`O valor do carro parcelado é: R$ ${valorcarro.toFixed(2)}`);
    } else {
        console.log("Opção inválida. Tente novamente.");
    }