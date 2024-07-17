const camposLogin = document.querySelectorAll('#login-body form input')
const logBtn = document.getElementById('botaoLogin')
logBtn.disabled = true

camposLogin[0].addEventListener('input', checkFields)
camposLogin[1].addEventListener('input', checkFields)

function checkFields(){
    ((camposLogin[0].value !== '') && (camposLogin[1].value !== '')) ? logBtn.disabled = false : logBtn.disabled = true
}

let emailCase = /[@]/

logBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    !camposLogin[0].value.match(emailCase) ? alert('Email inválido!') : null
})
