//Verificar nivel de fome para escolher o que vamos comer, niveis de fome 1, 2 e 3
// else if = if encadeado

let nivelDeFome = 1

if(nivelDeFome ===1){
    console.log("pouca fome")
}else if(nivelDeFome ===2){
    console.log("muita fome")
}else{
    console.log("Voce comeria muito")
}



// else if é como se estivesse deixando uma segunda pergunta/teste para o programa fazer
// pode ser usado varias vezes, verificando dias da semana:

let diaDaSemana = "quarta";

if (diaDaSemana === "segunda") {
  console.log("Dia de trabalho!");
} else if (diaDaSemana === "terça") {
  console.log("Mais um dia de trabalho.");
} else if (diaDaSemana === "quarta") {
  console.log("Metade da semana!");
} else if (diaDaSemana === "quinta") {
  console.log("Fim de semana se aproximando.");
} else if (diaDaSemana === "sexta") {
  console.log("Finalmente sexta-feira!");
} else {
  console.log("É fim de semana!");
}

//praticando nota de fotografia rs

let qualidadeDaFoto = 8; // De 1 a 10

if (qualidadeDaFoto >= 8) {
  console.log("Esta foto tem excelente qualidade!");
} else if (qualidadeDaFoto >= 5) {
  console.log("A qualidade desta foto é boa.");
} else {
  console.log("Esta foto precisa de melhorias.");
}

//armazenamento no hd

let espacoLivreEmDisco = 500; // Espaço livre em MB
let tamanhoDaFoto = 10; // Tamanho da foto em MB

if (espacoLivreEmDisco >= tamanhoDaFoto) {
  console.log("Espaço suficiente para armazenar a foto.");
} else {
  console.log("Espaço insuficiente. Libere espaço ou armazene em outro lugar.");
}
