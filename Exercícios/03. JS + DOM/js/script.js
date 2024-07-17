const home = document.getElementById('divHome')
const login = document.getElementById('login-body')
const register = document.getElementById('nova-conta')

mostrarApenasHome()

function mostrarApenasHome(){
    mostrarNada()
    home.style.display = 'block'
}

function mostrarApenasLogin(){
    mostrarNada()
    login.style.display = 'block'
    resetCampos('#login-body form input')
    let logBtn = document.getElementById('botaoLogin')
    logBtn.disabled = true
}

function mostrarApenasConta(){
    mostrarNada()
    register.style.display = 'block'
    resetCampos('#nova-conta form input')
    let paragrafos = document.querySelectorAll('#nova-conta form p')
    paragrafos.forEach((p) => p.innerText = '')
}

function mostrarNada(){
    home.style.display = 'none'
    login.style.display = 'none'
    register.style.display = 'none'
}

function resetCampos(ref){
    let campos = document.querySelectorAll(ref)
    campos.forEach((input) => input.value = '')
    let ultimo = campos[campos.length-1]
    ultimo.type == 'button' ? ultimo.value = 'Criar conta' : ultimo.checked = false
}
