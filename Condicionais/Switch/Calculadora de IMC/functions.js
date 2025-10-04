function calcularIMC(altura, peso) {
    let imc = (peso / (Math.pow(altura, 2))).toFixed(2);
    let classificacao;
    switch (true) {
        case (imc < 20):
            classificacao = `seu IMC é ${imc}, abaixo do peso.`;
            break;
        case (imc >= 20 && imc < 25):
            classificacao = `seu IMC é ${imc}, peso normal.`;
            break;
        case (imc >= 25 && imc < 30):
            classificacao = `seu IMC é ${imc}, sobrepeso.`;
            break;
        case (imc >= 30 && imc < 35):
            classificacao = `seu IMC é ${imc}, obesidade.`;
            break;
        case (imc >= 35):
            classificacao = `seu IMC é ${imc}, obesidade mórbida.`;
            break;
        default:
            classificacao = "Dados inválidos.";
            break;
    }
    return classificacao;
}