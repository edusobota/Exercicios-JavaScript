function executarOperacao(num1, num2, operacao) {
    switch (operacao) {
        case 1:
            return `A média é: ${(num1 + num2) / 2}`;
        case 2:
            let maior = Math.max(num1, num2);
            let menor = Math.min(num1, num2);
            return `A diferença é: ${maior - menor}`;
        case 3:
            return `O produto é: ${num1 * num2}`;
        case 4:
            if (num2 !== 0) {
                return `A divisão é: ${num1 / num2}`;
            } else {
                return "Erro: Divisão por zero";
            }
        default:
            return "Escolha inválida. Por favor, digite um número de 1 a 4.";
    }
}