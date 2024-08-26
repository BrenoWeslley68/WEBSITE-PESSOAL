let contador = 0
let input = document.getElementById('itarefa');
let add = document.getElementById('add');
let section = document.getElementById('areaLista')
function Adicionar(){
    //pegar o valor digitado no input
    if(input.value !== '' && input.value !== null && input.value !== 0){

        contador++;
        
        
        let novoItem = `<div id="${contador}" class="item clicado">
                <div onclick = "marcarTarefa(${contador})" class="itemicone">
                    <span class="material-symbols-outlined">
                        radio_button_unchecked
                        </span>
                </div>
                <div class="itemnome">
                    ${input.value}
                </div>
                <div class="itembotao">
                    <button id="delete" onclick = "Deletar(${contador})">
                        <span class="material-symbols-outlined">
                            disabled_by_default
                            </span> deletar
                    </button>
                </div>`
                //ADICIONAR NOVO ITEM NA SECTION
                section.innerHTML += novoItem

                //ZERAR OS CAMPOS
                input.value = ''
                input.focus()
    } 
    }
    function Deletar(id){
        let tarefa = document.getElementById(id);
        tarefa.remove()

    }
    function marcarTarefa(id){
        let item = document.getElementById(id)
        let classe = item.getAttribute('class');
        console.log(classe)
        if(classe == 'item'){
            item.classList.add('clicado')
        }

    }

input.addEventListener('keyup', function (event) {
    //SE TECLOU ENTER ADICIONA
    if(event.keyCode === 13){
        event.preventDefault()
        add.click()}
        
})