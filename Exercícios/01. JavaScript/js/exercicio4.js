function tratadorDeCliqueExercicio4(){
    const intervalo1 = [...Array(21).keys()].map(n => n + 30)
    const intervalo2 = [...Array(41).keys()].map(n => n + 60)
    for (i = 0; i < 2; i++){
        let valor = parseInt(prompt()), intervalo

        intervalo1.includes(valor) ? intervalo = intervalo1 :
        intervalo2.includes(valor) ? intervalo = intervalo2 :
        null

        console.log(`Número informado: ${valor}`)
        intervalo ? console.log(`${valor} está no intervalo [${intervalo[0]},${intervalo[intervalo.length-1]}].`) :
        console.log("O número informado não está em nenhum dos dois intervalos.")
    }
}