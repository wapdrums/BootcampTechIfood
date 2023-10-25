/*
Exercício 1:
Crie uma variável chamada idade e atribua a ela a sua idade. Em seguida, exiba o valor dessa variável no console. Por favor, responda apenas a este exercício.
*/

let idade = 30;
console.log(idade);

/*
Exercício 2:
Crie uma variável chamada nome e atribua a ela o seu nome. Em seguida, exiba o valor dessa variável no console. Responda apenas a este exercício quando estiver pronto.
*/

let nome = "mayara";
console.log(nome)

/*
Exercício 3:
Crie uma variável chamada anoDeNascimento e atribua a ela o ano em que você nasceu. Em seguida, calcule sua idade usando essa variável e exiba-a no console. Responda apenas a este exercício quando estiver pronto.
*/

let anoDeNascimento = 1993;
let anoAtual = 2023; // forma manual - não se usa porque em um sistema precisa estar sempre atualizado.
let idadeHoje = anoAtual - anoDeNascimento;
console.log("Atualmente voce tem " + idadeHoje)

//porem o ideal é:

let anoDeNascimento2 = 1993;
let anoAtual2 = new Date().getFullYear(); // Obtém o ano atual

let idade2 = anoAtual - anoDeNascimento;

console.log("Sua idade é " + idade2 + " anos.");

/*
Exercício 4:
Crie uma variável chamada numeroA e atribua a ela um número inteiro. Crie outra variável chamada numeroB e atribua a ela outro número inteiro. Em seguida, some esses dois números e exiba o resultado no console. Responda apenas a este exercício quando estiver pronto.
*/

let numeroA = 8;
let numeroB = 2;
let resultado = numeroA + numeroB;

console.log(resultado);

/*
Exercício 5:
Crie uma variável chamada frase e atribua a ela uma frase ou uma mensagem de sua escolha. Em seguida, exiba essa frase no console. Responda apenas a este exercício quando estiver pronto.
*/

let frase = "A chave é não desistir";
console.log(frase)