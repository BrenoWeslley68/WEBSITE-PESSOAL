let input = document.getElementById('icampo')
let calculaNumero = true
operacaoAtual = ''

function adicionarNu(id){
    if(calculaNumero){
        input.value = id
        calculaNumero = false
    } else {
        input.value += id   
    }
}
function adicionarDividir(){
    if (!calculaNumero){
       operacaoAtual += input.value + '/'
       input.value = ''
       calculaNumero = true  
    }
}
function adicionarVezes(){
    if (!calculaNumero){
        operacaoAtual += input.value + '*'
        input.value = ''
        calculaNumero = true
    }
}
function adicionarMenos(id){
    if (!calculaNumero){
        operacaoAtual += input.value + '-'
        input.value = ''
        calculaNumero = true
    }
}
function adicionarMais(id){

    if (!calculaNumero){
        operacaoAtual += input.value + '+'
        input.value = ''
        calculaNumero = true 
    } 
}
function limpar(){
    input.value = ''
    operacaoAtual = ''
    calculaNumero = true
}
function resultado() {
    if(!calculaNumero){
    operacaoAtual += input.value;
    input.value = eval(operacaoAtual);
    operacaoAtual = '';
    novoNumero = true;
    }
}