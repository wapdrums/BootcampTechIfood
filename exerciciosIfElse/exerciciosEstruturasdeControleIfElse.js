/*Tópico: Estruturas de Controle - if, else e else if*/

/*Crie uma variável chamada idade e atribua um valor numérico a ela. Em seguida, escreva um código que verifique se a pessoa é maior de idade (idade maior ou igual a 18) e exiba no console uma mensagem informando se a pessoa é maior de idade ou não. Responda apenas a este exercício quando estiver pronto.*/


let idade = 12

if (idade >= 18) {
    console.log(idade + " anos, você é maior de idade")
} else {
    console.log(idade + " anos, você é menor de idade")
}


/*
Crie uma variável chamada hora e atribua um valor numérico representando a hora atual (por exemplo, 14 para 2 da tarde). Escreva um código que determine se é manhã (até 11 horas), tarde (das 12 às 17 horas) ou noite (após as 18 horas) e exiba a saudação correspondente no console. Responda apenas a este exercício quando estiver pronto.

*/

let hora = new Date().getHours(); // hora atual do sistema

if (hora <= 11.59) {
    console.log("Período: Manhã");
} else if (hora >= 12.00 && hora <= 17.59) {
    console.log("Período: Tarde");
} else if (hora >= 18.00) {
    console.log("Período: Noite");
} else {
    console.log("Não sei informar");
}


/* 
Exercício 3:
Crie uma variável chamada nota e atribua um valor numérico de 0 a 10 a ela, representando uma nota em um exame. Escreva um código que determine o conceito da nota com base na seguinte escala:

Nota de 0 a 4: "Insuficiente"
Nota de 5 a 6: "Suficiente"
Nota de 7 a 8: "Bom"
Nota de 9 a 10: "Excelente"

*/

let nota = 10;

if (nota >= 0 && nota <= 4) {
    console.log("Insuficiente");
} else if (nota >= 5 && nota <= 6) {
    console.log("Suficiente");
} else if (nota >= 7 && nota <= 8) {
    console.log("Bom");
} else {
    console.log("Excelente");
}

/*
Exercício 4:
Crie uma variável chamada diaSemana e atribua um valor numérico de 1 a 7 a ela, onde 1 representa Domingo, 2 representa Segunda-feira e assim por diante, até 7, que representa Sábado. Escreva um código que determine o dia da semana com base no valor atribuído e exiba o nome do dia no console. Por exemplo, se diaSemana for 2, o código deve exibir "Segunda-feira". Use estruturas de controle if, else if ou switch para realizar essa tarefa. Responda apenas a este exercício quando estiver pronto. Se tiver alguma dúvida, fique à vontade para perguntar.
*/

/*let diaSemana = 4

if (diaSemana == 1) {
    console.log("É domingo")
} else if (diaSemana == 2) {
    console.log("É segunda")
} else if (diaSemana == 3) {
    console.log("É terça")
} else if (diaSemana == 4) {
    console.log("É quarta")
} else if (diaSemana == 5) {
    console.log("É quinta")
} else if (diaSemana == 6) {
    console.log("É sexta")
} else {
    console.log("É sabado")
} */


// Topico Swith Case

/*
Crie uma variável chamada diaSemana e atribua um valor numérico de 1 a 7 a ela, onde 1 representa Domingo, 2 representa Segunda-feira e assim por diante, até 7, que representa Sábado. Escreva um código usando switch case para determinar o dia da semana com base no valor atribuído e exibir o nome do dia no console. Por exemplo, se diaSemana for 3, o código deve exibir "Terça-feira". Responda apenas a este exercício quando estiver pronto.
*/

let diaSemana = 4

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("segunda");
        break;
    case 3:
        console.log("terça");
        break;
    case 4:
        console.log("quarta");
        break;
    case 5:
        console.log("quinta");
        break;
    case 6:
        console.log("sexta");
        break;
    case 7:
        console.log("sabado");
        break;
}

/*
Exercício 2:
Crie uma variável chamada mes e atribua um valor numérico de 1 a 12 a ela, onde 1 representa Janeiro, 2 representa Fevereiro e assim por diante, até 12, que representa Dezembro. Escreva um código usando switch case para determinar o nome do mês com base no valor atribuído e exibir o nome do mês no console. Por exemplo, se mes for 5, o código deve exibir "Maio". Responda apenas a este exercício quando estiver pronto.
*/

let mes = 7

switch (mes) {
    case 1:
        console.log("janeiro");
        break;
    case 2:
        console.log("fevereiro");
        break;
    case 3:
        console.log("março");
        break;
    case 4:
        console.log("abril");
        break;
    case 5:
        console.log("maio");
        break;
    case 6:
        console.log("junho");
        break;
    case 7:
        console.log("julho");
        break;
    case 8:
        console.log("agosto");
        break;
    case 9:
        console.log("setembro");
        break;
    case 10:
        console.log("outubro");
        break;
    case 11:
        console.log("novembro");
        break;
    case 12:
        console.log("dezembro");
        break;
}

/*
Crie uma variável chamada tipoVeiculo e atribua uma string representando um tipo de veículo ("carro", "moto", "bicicleta" ou "outro") a ela. Escreva um código usando switch case para determinar o tipo de veículo com base no valor atribuído e exibir uma mensagem no console informando o tipo de veículo. Responda apenas a este exercício quando estiver pronto.
*/

let tipoVeiculo = "outro"

switch (tipoVeiculo) {
    case "moto":
        console.log("moto");
        break;
    case "carro":
        console.log("carro");
        break;
    case "bicicleta":
        console.log("bicicleta");
        break;
    case "outro":
        console.log("outro");
        break;
}

// desafio calcular nivel jogador

function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    const mensagem = `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
    return mensagem;
}

const vitorias = 75;
const derrotas = 15;
const resultado = calcularNivel(vitorias, derrotas);
console.log(resultado);
