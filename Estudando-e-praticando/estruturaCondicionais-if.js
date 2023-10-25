//blocos de codigos que só serao executadas se determinadas expressão for verdadeira


// botao que aperta liga e desliga

let ligado = true

if(ligado){
    console.log("executou comando")
}


let desligado = false

if(1 === 1){
    console.log("executou comando")
}

//só executa se a variavel ou condição for verdadeira


//ex: vou fazer um bolo, só compra leite se tiver ovos

let possuiOvos = false
let itensComprados = ""

if(possuiOvos){
    itensComprados = "Leite"
    //isso vai ser executado apenas se o if for verdadeiro
}

console.log("Item comprado: " + itensComprados)
//isso vai ser executado se estiver dentro do escopo do if ou não



//praticando, dias da semana:

let diaDaSemana = "sábado";

if (diaDaSemana === "sábado" || diaDaSemana === "domingo") {
  console.log("É fim de semana!");
} else {
  console.log("É dia de trabalho.");
}


//verificando acesso:
let usuarioAutenticado = true;

if (usuarioAutenticado) {
  console.log("Acesso concedido.");
} else {
  console.log("Acesso negado.");
}


//verificando numero par ou impar
let numero = 7;

if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}


//verificando idade

let idade = 20;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

//qual numero maior?

let numero1 = 10;
let numero2 = 15;

if (numero1 > numero2) {
  console.log("O número 1 é maior.");
} else if (numero2 > numero1) {
  console.log("O número 2 é maior.");
} else {
  console.log("Os números são iguais.");
}
