let campoEmailLogin = document.getElementById("login-email")
let campoSenhaLogin = document.getElementById("login-senha")

async function logarConta(){
    const options = {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: campoEmailLogin.value, senha: campoSenhaLogin.value})
    }
    const result = await fetch("http://127.0.0.1:3125/log-user", options)
    const serverResponse = await result.json();
    if (serverResponse.accountExists){
        alert("Usuário logado!")
        console.log(serverResponse.loggedUser)
    } else {
        alert("Não existe usuário com essas credenciais!")
    }
    campoEmailLogin.value = ''
    campoSenhaLogin.value = ''
}