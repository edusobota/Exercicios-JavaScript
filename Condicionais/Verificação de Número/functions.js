function verificarNumero(numero, opcao) {
    if (opcao === 1) {
        if (numero % 2 === 0) {
            return `O número ${numero} é par.`;
        } else {
            return `O número ${numero} é ímpar.`;
        }
    } else if (opcao === 2) {
        if (numero > 0) {
            return `O número ${numero} é positivo.`;
        } else if (numero < 0) {
            return `O número ${numero} é negativo.`;
        } else {
            return `O número é zero.`;
        }
    } else {
        return "Opção inválida!";
    }
}
