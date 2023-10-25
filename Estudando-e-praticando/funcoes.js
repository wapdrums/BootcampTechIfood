torrar()


//mecanismo que pode ser chamado varias vezes

function torrar(){
    console.log("torrando pão")
    injetarPao()
}

function injetarPao(){
    console.log("Preparando pra injetar pão")
    console.log("finalizado")
}

// funcoes com parametro

torrar("pao de forma") //pao de forma = atribuindo valor na variavel
torrar("pao integral")

function torrar(pao){ // pao = variavel
    console.log("Torrada feita com" + pao)
}

//funcao com multiplos parametros
torrar("pao de forma", "Mayara")
torrar("pao integral", "Lello")

function torrar(pao, nome){
    console.log("torrada feita com" + pao)
    console.log("ela é um pedido de" + nome)
}


// Com valor padrao

torrar("pao de forma")
torrar("pao integral")

function torrar(pao, nome = "Cliente"){
    console.log("torrada feita com" + pao)
    console.log("ela é um pedido de" + nome)
}

//retornando valores com funções

function novaFuncao(valor, valorCalculo = 10){
    let valorNovo = valor * valorCalculo;
    return valorNovo;
}

let valorMultiplicado = novaFuncao(10);
console.log(valorMultiplicado);