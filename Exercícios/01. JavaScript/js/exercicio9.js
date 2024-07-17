function haOnzeDigitos(cpf) {
    return cpf.length == 11
}

function todosOsOnzeDigitosSaoNumeros(cpf) {
    return /^\d{11}$/.test(cpf)
}

function osOnzeNumerosSaoDiferentes(cpf) {
    let set = new Set(cpf.split(''))
    return set.size !== 1
}

function oPrimeiroDigitoVerificadorEhValido(cpf) {
    cpf = cpf.split("").map(n => parseInt(n))
    let soma = 0
    for (let i = 0; i < 9; i++){
        soma += cpf[i] * (10 - i)
    }
    let resto = (soma * 10) % 11
    let digitoVerificador = (resto === 10) ? 0 : resto
    return digitoVerificador === cpf[9]
}

function oSegundoDigitoVerificadorEhValido(cpf) {
    cpf = cpf.split("").map(n => parseInt(n))
    let soma = 0
    for (let i = 0; i < 10; i++){
        soma += cpf[i] * (11 - i)
    }
    let resto = (soma * 10) % 11
    let digitoVerificador = (resto === 10) ? 0 : resto
    return digitoVerificador === cpf[10]
}

function validarCPF(validacao, cpf) {
    switch (validacao) {
        case "onzeDigitos": return haOnzeDigitos(cpf)
        case "onzeSaoNumeros": return todosOsOnzeDigitosSaoNumeros(cpf) && validarCPF("onzeDigitos", cpf)
        case "naoSaoTodosIguais": return osOnzeNumerosSaoDiferentes(cpf) && validarCPF("onzeSaoNumeros", cpf)
        case "verificador10": return oPrimeiroDigitoVerificadorEhValido(cpf) && validarCPF("naoSaoTodosIguais", cpf)
        case "verificador11": return oSegundoDigitoVerificadorEhValido(cpf) && validarCPF("verificador10", cpf)

        default:
            console.error(validacao + " é um botão desconhecido...")
            return false
    }
}

function tratadorDeCliqueExercicio9(nomeDoBotao) {
    const cpf = document.getElementById("textCPF").value

    const validacao = (nomeDoBotao === "validade") ? "verificador11": nomeDoBotao
    const valido = validarCPF(validacao, cpf)
    const validoString = valido ? "valido" : "inválido"
    const validadeMensagem = "O CPF informado (" + cpf + ") é " + validoString
    console.log(validadeMensagem)

    if (nomeDoBotao !== "validade") {
        let divResultado = document.getElementById(validacao);
        divResultado.textContent = validoString
        divResultado.setAttribute("class", valido ? "divValidadeValido" : "divValidadeInvalido")    
    } else {
        window.alert(validadeMensagem)
    }
}