function Cadastrar (){
    let nome = document.getElementById('inome').value
    let email = document.getElementById('iemail').value
    let idade = document.getElementById('iidade').value
    let sexo = document.getElementsByName('sexo')
    let res = document.getElementById('res')
    if(nome ===''|| email ===''|| idade == 0) {
        window.alert('erro, faltando dados')
    } else {
        let genero = ''
        if(sexo[0].checked){
            genero = 'Homem'
        } else if(sexo[1].checked) {
            genero = 'Mulher'
        }
        res.innerHTML = `<br/><p>Seu nome é ${nome} </p> <br/>`
        res.innerHTML+= `<p>Seu email é ${email} </p><br/>`
        res.innerHTML += `<p>Sua idade é ${idade} </p><br/>`
        res.innerHTML += `<p>Seu genero é ${genero} </p><br/>`
    }
}
function Limpar() {
   let res = document.getElementById('res')
   res.innerHTML = ''
}