const ufSelect = document.getElementById('uf');
const cidadeSelect = document.getElementById('cidade');

async function carregarUFS(){
    const data = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    const ufs = await data.json()
    ufs.forEach(uf => {
        const option = document.createElement('option')
        option.value = uf.sigla
        option.text = uf.sigla
        ufSelect.add(option)
    })
}

async function carregarCidades(uf){
    const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`)
    const cidades = await data.json()
    cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>'
    cidades.forEach(cidade => {
        const option = document.createElement('option')
        option.value = cidade.nome
        option.text = cidade.nome
        cidadeSelect.add(option)
    })
    cidadeSelect.disabled = false
}

carregarUFS()

ufSelect.addEventListener('change', () => {
    const uf = ufSelect.value
    if (uf){
        carregarCidades(uf)
    } else{
        cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>';
        cidadeSelect.disabled = true;
    }
})