const createBtn = document.querySelector('#areaBotaoConta input')
const camposRegistro = document.querySelectorAll('#nova-conta input')

createBtn.addEventListener('click', () => {
    let nomeValido = validaTextoEmBranco(camposRegistro[0], 'statusNome', 'Nome')
    let sobrenomeValido = validaTextoEmBranco(camposRegistro[1], 'statusSobrenome', 'Sobrenome')
    let cpfValido = validaCPF(camposRegistro[2])
    let emailValido = validaEmail(camposRegistro[3], 'statusEmail', 'E-mail')
    let senhaValida = verificaSenhaIgual(camposRegistro[5], 'statusRepitaSenha', 'Senhas')

    let contaValida = nomeValido && sobrenomeValido && emailValido && senhaValida
    if (contaValida){
        let conta = new Conta(camposRegistro[0].value, camposRegistro[1].value, cpfValido, camposRegistro[3].value, camposRegistro[4].value)
        console.log(conta)
    }
})

function validaTextoEmBranco(input, p, label){
    console.log(input, p, label)
    p = document.getElementById(p)
    if (input.value == ''){
        p.style.color = 'red'
        p.innerText = `O valor de ${label} não pode ser nulo`
        return false
    } else{
        if (label === 'Nome' || label === 'Sobrenome' || label === 'Senha'){
            p.style.color = 'green'
            p.innerText = `Válido!`
        }
        return true
    }
}

function validaEmail(input, p, label){
    campoPreenchido = validaTextoEmBranco(input, p, label)
    p = document.getElementById(p)
    let emailCase = /[@]/
    if (campoPreenchido){
        if (input.value.match(emailCase)){
            p.style.color = 'green'
            p.innerText = `Válido!`
            return true
        } else{
            p.style.color = 'red'
            p.innerText = `O valor de ${label} precisa ter um @`
        }
    } else{
        p.style.color = 'red'
        p.innerText = `O valor de ${label} não pode ser nulo`
    }
    return false
}

function verificaSenhaIgual(input, p, label){
    campoPreenchido = validaTextoEmBranco(input, p, label)
    p = document.getElementById(p)
    if (campoPreenchido){
        if (input.value === camposRegistro[4].value){
            p.style.color = 'green'
            p.innerText = `Válido!`
            return true
        } else{
            p.style.color = 'red'
            p.innerText = `O valor das ${label} precisam ser os mesmos`
        }
    } else{
        p.style.color = 'red'
        p.innerText = `O valor do campo Repita sua senha não pode estar nulo`
    }
    return false
}

const statusCPF = document.getElementById('statusCPF')

function validaCPF(input){
    let cpf = new CPF(input.value)
    return cpf
}

class CPF{
    constructor(cpf){
        try{
            if (this.validacao(cpf)){
                this.cpf = cpf
                statusCPF.innerText = 'Válido!'
                statusCPF.style.color = 'green'
            }
        } catch (e){
            statusCPF.innerText = e
            statusCPF.style.color = 'red'
        }
    }

    validacao(cpf){
        cpf = cpf.replace(/\D/g, '')
        if (cpf === ''){
            throw new Error('O CPF não pode ser nulo')
        }
        if (!this.onzeDigitos(cpf) || !this.onzeDigitosNumericos(cpf) || !this.onzeDigitosDiferentes(cpf)){
            throw new Error('O formato do CPF não está correto, verifique se há onze dígitos numéricos e diferentes')
        }
        if (!this.primeiroDigitoVerificador(cpf) || !this.segundoDigitoVerificacor(cpf)){
            throw new Error('Um dos dois, ou mesmo os dois, digitos verificadores do CPF estão incorretos')
        }
        return true
    }

    onzeDigitos(cpf){
        return cpf.length == 11
    }

    onzeDigitosNumericos(cpf){
        return /^\d{11}$/.test(cpf)
    }

    onzeDigitosDiferentes(cpf){
        let set = new Set(cpf.split(''))
        return set.size !== 1
    }

    primeiroDigitoVerificador(cpf){
        cpf = cpf.split('').map(n => parseInt(n))
        let soma = 0
        for (let i = 0; i < 9; i++){
            soma += cpf[i] * (10 - i)
        }
        let resto = (soma * 10) % 11
        let digitoVerificador = (resto === 10) ? 0 : resto
        return digitoVerificador === cpf[9]
    }

    segundoDigitoVerificacor(cpf){
        cpf = cpf.split('').map(n => parseInt(n))
        let soma = 0
        for (let i = 0; i < 10; i++){
            soma += cpf[i] * (11 - i)
        }
        let resto = (soma * 10) % 11
        let digitoVerificador = (resto === 10) ? 0 : resto
        return digitoVerificador === cpf[10]
    }
}

class Conta{
    constructor(nome, sobrenome, cpf, email, senha){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email = email
        this.senha = senha
    }
}