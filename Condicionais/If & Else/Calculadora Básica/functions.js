function calcular(operacao, num1, num2) {
    let resultado
    if (operacao === "+") {
        resultado = num1 + num2
    } else if (operacao === "-") {
        resultado = num1 - num2
    } else if (operacao === "*") {
        resultado = num1 * num2
    } else if (operacao === "/") {
        resultado = num1 / num2
    }
    return resultado
}
