//se tiver ovos compramos leite para fazer um bolo, se nao podemos comprar uma lasanha

let possuiOvos = false
let itensComprados = ""

if(possuiOvos) {
    itensComprados = "leite"
} else {
    console.log("passou na sessão de congelados")
    itensComprados ="Lasanha congelada"
}

console.log("item comprado:" + itensComprados)
//Essa msg aparece se cair no if ou else


//praticando 

let numero = -3;

if (numero > 0) {
  console.log("O número é positivo.");
} else {
  console.log("O número não é positivo.");
}

//saldo na conta

let saldo = 100;

if (saldo >= 50) {
  console.log("Você possui saldo suficiente para fazer a compra.");
} else {
  console.log("Saldo insuficiente. Recarregue sua conta.");
}


//horario de funcionamento

let horaAtual = 14;

if (horaAtual >= 9 && horaAtual <= 18) {
  console.log("A loja está aberta.");
} else {
  console.log("A loja está fechada. Volte amanhã.");
}


//verificando estação do ano

let mes = "setembro";

if (mes === "dezembro" || mes === "janeiro" || mes === "fevereiro") {
  console.log("É verão.");
} else if (mes === "março" || mes === "abril" || mes === "maio") {
  console.log("É primavera.");
} else if (mes === "junho" || mes === "julho" || mes === "agosto") {
  console.log("É inverno.");
} else {
  console.log("É outono.");
}

//tipo de dados com else

let dado = 42;

if (typeof dado === "number") {
  console.log("O dado é um número.");
} else {
  console.log("O dado não é um número.");
}


//nota escolar 

let nota = 80;

if (nota >= 90) {
  console.log("A classificação é 'A'.");
} else if (nota >= 80) {
  console.log("A classificação é 'B'.");
} else if (nota >= 70) {
  console.log("A classificação é 'C'.");
} else if (nota >= 60) {
  console.log("A classificação é 'D'.");
} else {
  console.log("A classificação é 'F'.");
}
