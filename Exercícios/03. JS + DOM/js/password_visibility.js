function toggleSenha(){
    let senha = document.getElementById('login-password')
    senha.type === 'password' ? senha.type = 'text' : senha.type = 'password'
}

window.onclick = function(e){
    if (!e.target.matches('#login-password') && !e.target.matches('#olho')){
        document.getElementById('login-password').type = 'password'
    }
}