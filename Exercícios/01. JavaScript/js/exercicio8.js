function obterRegiaoFiscalAtravesDoCPFInformado(cpfInformado) {
    cpfInformado.slice(8, 9) == 0 ? regiaoFiscal = 10 : regiaoFiscal = cpfInformado.slice(8, 9)
    return regiaoFiscal
}

function tratadorDeCliqueExercicio8() {
    let textCPF = document.getElementById("textCPF")
	let textRegiao = document.getElementById("regiaoFiscal")

    const regiaoFiscal = obterRegiaoFiscalAtravesDoCPFInformado(textCPF.value);
    textRegiao.textContent = "Região fiscal: " + regiaoFiscal
}
