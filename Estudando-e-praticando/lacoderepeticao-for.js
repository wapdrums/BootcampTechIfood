/*  

LAÇOS DE REPETIÇÃO: é um conteudo que vai se repetir em determinadas vezes ate que determinada condição seja verdadeira

FOR
( declara variavel ; define até quando ; como vai ser incrementado)

for (inicialização; condição; incremento) {
  // Código a ser repetido
}


WHILE
DO WHILE


*/


for (let contador = 0; contador < 4; contador++) {
    console.log(contador)
    console.log("aumentar o contador")
}

//aonde usar isso?
/*contador ou i

for(let i = 0; i < 4; i++ ){
    console.log(i)
    console.log("aumentar o i")
}
*/

for (let i = 10; i >= 1; i--) {
    console.log(i);
    console.log("10 a 1 de forma decrescente")
}

// 10 a 1 de forma decrescente

let frutas = ["maçã", "banana", "laranja", "morango"];
console.log("frutas", frutas.length);
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
// length retorna o numero de elementos/caracteres do array
}

//imprimi o array de frutas

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// contador só de numeros pares de 2 a 10

let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma += i;
}

console.log("A soma dos números de 1 a 100 é: " + soma);

//soma de numero a numero do 1 até o 100 

//Exercicios
