// Estrutura de decisão - Switch case

/* pode ser usada em paralelo ao if else ou substituir 
Switch - estruturas de decisão mais organizadas quando você precisa comparar uma variável com vários valores possíveis
Case - "caso" - O case é usado para direcionar o fluxo do programa com base no valor da expressão.
Break - parar a execução da estrutura após um bloco de codigo ser executado
Default - caso um dos blocos não seja correspondente 

switch case é usada quando existem  varias opçoes a serem avaliadas com base em um valor especifico
estrutura: switch (expressão){}

*/

let fruta = "amora"

switch (fruta){
    case "laranja":
        console.log("suco de laranja")
        break

        case "banana":
            console.log("vitamina de banana")
            break

            case "maça":
                console.log("suco de maçã")
                break

                default:
                    console.log("suco generico")
}


//executa o case banana e tudo que esta abaixo dele, se não usar o break
// se não encontrar a "fruta" em algum caso ele executa o default

let frutas = "morango"

switch (frutas){
    case "laranja":
    case "maça":
    case "limao":
        console.log("suco")
        break

    case "banana":
    case "morango":
        console.log("vitamina")
        break

    default:
        console.log("suco generico")
}

//pode ser usado mais de uma palavra no case que significam a mesma coisa "vitamina" ou "suco"

//praticando, direção

let direcao = "norte";

switch (direcao) {
  case "norte":
    console.log("Siga para o norte.");
    break;
  case "sul":
    console.log("Siga para o sul.");
    break;
  default:
    console.log("Direção desconhecida.");
}

//dia da semana

let dia = "sábado";

switch (dia) {
  case "segunda":
    console.log("Dia de trabalho");
    break;
  case "quarta":
    console.log("Meio da semana");
    break;
  case "sexta":
    console.log("Sexta-feira!");
    break;
  default:
    console.log("Outro dia");
}

//classificação de dias da semana
let diaDaSemana = "quarta";

switch (diaDaSemana) {
  case "segunda":
    console.log("Início da semana");
    break;
  case "terça":
  case "quarta":
  case "quinta":
    console.log("Dias úteis");
    break;
  case "sexta":
    console.log("Sexta-feira!");
    break;
  case "sábado":
  case "domingo":
    console.log("Fim de semana");
    break;
  default:
    console.log("Dia inválido");
}



//escolha da bebida com base na idade

let idade = 20;
let bebida;

switch (idade >= 18) {
  case true:
    bebida = "Cerveja";
    break;
  case false:
    bebida = "Refrigerante";
    break;
}

console.log("Você pode pedir: " + bebida);


//numero par ou impar

let numero = 7;

switch (numero % 2) {
  case 0:
    console.log("Número par");
    break;
  case 1:
    console.log("Número ímpar");
    break;
  default:
    console.log("Valor inválido");
}

// nivel combustivel carro

let nivelDeCombustivel = "baixo";
let acao;

switch (nivelDeCombustivel) {
  case "cheio":
    acao = "Você tem combustível suficiente.";
    break;
  case "meio":
    acao = "Considere abastecer em breve.";
    break;
  case "baixo":
    acao = "Abasteça imediatamente para evitar ficar sem combustível.";
    break;
  default:
    acao = "Nível desconhecido.";
}

console.log("Ação: " + acao);


//placa de transito

let sinal = "pare";
let fazer;

switch (sinal) {
  case "pare":
    fazer = "Pare o veículo.";
    break;
  case "siga":
    fazer = "Siga em frente.";
    break;
  case "dê a preferência":
    fazer = "Dê a preferência a outros veículos.";
    break;
  default:
    fazer = "Ação não especificada para este sinal.";
}

console.log("Ação: " + acao);


//nota com feedback

let nota = "A";
let feedback;

switch (nota) {
  case "A":
    feedback = "Excelente! Parabéns pelo ótimo desempenho.";
    break;
  case "B":
    feedback = "Muito bom, continue assim.";
    break;
  case "C":
    feedback = "Bom, mas pode melhorar.";
    break;
  case "D":
    feedback = "Precisa de mais esforço.";
    break;
  case "F":
    feedback = "Necessita de melhorias significativas.";
    break;
  default:
    feedback = "Nota não válida.";
}

console.log("Feedback: " + feedback);


// tempo e atividades 

let clima = "ensolarado";
let atividadeExterna;

switch (clima) {
  case "ensolarado":
    atividadeExterna = "Perfeito para um dia na praia!";
    break;
  case "chuvoso":
    atividadeExterna = "Talvez um dia de filmes em casa.";
    break;
  case "nublado":
    atividadeExterna = "Um bom dia para uma caminhada no parque.";
    break;
  default:
    atividadeExterna = "Confira a previsão do tempo para mais informações.";
}

console.log("Atividade externa: " + atividadeExterna);


//cardapio do restaurante

let diaCardapio = "terça-feira";
let pratoDoDia;

switch (diaCardapio) {
  case "segunda-feira":
    pratoDoDia = "Macarrão à carbonara.";
    break;
  case "terça-feira":
    pratoDoDia = "Frango grelhado com legumes.";
    break;
  case "quarta-feira":
    pratoDoDia = "Risoto de cogumelos.";
    break;
  default:
    pratoDoDia = "Consulte o especial do dia.";
}

console.log("Prato do dia: " + pratoDoDia);

