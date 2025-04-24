/* (5 pontos)
1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x e mostre os números.
Nome Aluno: Lívia Azevedo
*/

const teclado = require('prompt-sync')();

    let x:number = parseInt(teclado('Digite um número: '));
    let y:number  = parseInt(teclado('Digite outro número: '));
    
    console.log(`Os números digitados foram: ${x} e ${y}`);
    
    let z: number = x;
    x = y; 
    y = z; 
    
    console.log(`Os números invertidos são ${x} e ${y}`);