let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    // Pegar o valor digitado no input
    let valorInput = input.value;
    // Se não for vazio, nulo ou indefinido
    if (valorInput !== '' && valorInput !== null && valorInput !== undefined) {
        ++contador;
        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <input type="checkbox" id="itemclicado${contador}">
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="Deletar(${contador})" class="delete">
                    <span class="material-symbols-outlined">delete</span>Deletar
                </button>
            </div>
        </div>`;
        // Adicionar novo item no main
        main.innerHTML += novoItem;
        // Zerar os campos
        input.value = '';
        input.focus();
    }
}

function Deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    let item = document.getElementById(id);
    let checkbox = document.getElementById('itemclicado' + id);

    if (checkbox.checked) {
        item.classList.add('clicado');
    } else {
        item.classList.remove('clicado');
    }
}

input.addEventListener('keyup', function(event) {
    // Se teclou Enter (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});
