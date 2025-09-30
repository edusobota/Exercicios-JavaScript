function calcularIMC(peso, altura) {
    let imc = peso / Math.pow(altura, 2)
    if (imc < 18.5) {
        return `IMC: ${imc.toFixed(2)} - Abaixo do peso`
    } else if (imc >= 18.5 && imc < 25) {
        return `IMC: ${imc.toFixed(2)} - Peso normal`
    } else if (imc >= 25 && imc < 30) {
        return `IMC: ${imc.toFixed(2)} - Acima do peso`
    } else {
        return `IMC: ${imc.toFixed(2)} - Obeso`
    }
}
