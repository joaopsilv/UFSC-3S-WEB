function convertCelciusToFahrenheit(celcius) {
	return celcius*9/5 + 32
}

function conversaoCtoF() {
	let textCelcius = document.getElementById("celciusText")
	let textFahrenheit = document.getElementById("resultFahrenheit")
	textFahrenheit.textContent = convertCelciusToFahrenheit(textCelcius.value) + "ºF"
}