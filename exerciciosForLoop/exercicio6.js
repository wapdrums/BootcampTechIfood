/*Exercício 6:
Escreva um loop for que exiba a sequência de Fibonacci até o décimo termo. A sequência de Fibonacci começa com 0 e 1, e cada termo subsequente é a soma dos dois termos anteriores. Responda apenas a este exercício quando estiver pronto.
*/

// Inicialize as variáveis com os dois primeiros termos da sequência
let termo1 = 0;
let termo2 = 1;

console.log(termo1); // Exiba o primeiro termo
console.log(termo2); // Exiba o segundo termo

// Use um loop `for` para gerar os termos restantes
for (let i = 3; i <= 10; i++) {
    let proximoTermo = termo1 + termo2;
    console.log(proximoTermo);
    
    // Atualize as variáveis para o próximo loop
    termo1 = termo2;
    termo2 = proximoTermo;
}
