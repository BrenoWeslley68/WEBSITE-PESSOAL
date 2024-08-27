let display = document.getElementById('display');
let operacaoAtual = '';
let novoNumero = true;

function adicionarNumero(numero) {
    if (novoNumero) {
        display.value = numero;
        novoNumero = false;
    } else {
        display.value += numero;
    }
}

function adicionarOperacao(operacao) {
    if (!novoNumero) {
        operacaoAtual += display.value + operacao;
        novoNumero = true;
    }
}

function calcular() {
    operacaoAtual += input.value;
    display.value = eval(operacaoAtual);
    operacaoAtual = '';
    novoNumero = true;
}

function limpar() {
    display.value = '';
    operacaoAtual = '';
    novoNumero = true;
}




