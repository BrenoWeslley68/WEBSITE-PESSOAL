let input = document.getElementById('icampo');
let = operacaoAtual = ''
let calcula = true

function adicionarNu(id){
    if(calcula){
        input.value = id
    calcula = false
    } else {
        input.value += id
    }
}

function adicionarDividir(){
    if (!calcula){
        operacaoAtual += input.value + '/'
        input.value = ''
        calcula = true
    }
}
function adicionarVezes(){
    if (!calcula){
        operacaoAtual += input.value + '*'
        input.value = ''
        calcula = true
    }
}
function adicionarMenos(){
    if (!calcula){
        operacaoAtual += input.value + '-'
        input.value = ''
        calcula = true
    }
}
function adicionarMais(){
    if (!calcula){
        operacaoAtual += input.value + '+'
        input.value = ''
        calcula = true
    }
}

function limpar(){
    input.value = ''
    operacaoAtual = ''
    calcula = true
}
function resultado(){
    operacaoAtual += input.value
    input.value = eval(operacaoAtual)
    operacaoAtual = ''
    calcula = true
}
