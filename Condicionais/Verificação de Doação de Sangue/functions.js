function verificarDoacao(idade) {
    if (idade >= 18 && idade <= 67) {
        return `Sua idade é ${idade}. Você pode doar sangue.`;
    } else {
        return `Sua idade é ${idade}. Você NÃO pode doar sangue.`;
    }
}
