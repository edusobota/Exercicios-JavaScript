function calcular(operador, num1, num2) {
    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Erro: Divisão por zero";
            }
        default:
            return "Operação não reconhecida";
    }
}