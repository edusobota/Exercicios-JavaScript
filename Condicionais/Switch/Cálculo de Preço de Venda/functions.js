function calcularPrecoVenda(valorCusto) {
    let precoFinal;
    switch (true) {
        case (valorCusto < 10):
            precoFinal = valorCusto * 1.7; // Margem de 70%
            break;
        case (valorCusto >= 10 && valorCusto < 30):
            precoFinal = valorCusto * 1.5; // Margem de 50%
            break;
        case (valorCusto >= 30 && valorCusto < 50):
            precoFinal = valorCusto * 1.4; // Margem de 40%
            break;
        case (valorCusto >= 50):
            precoFinal = valorCusto * 1.3; // Margem de 30%
            break;
        default:
            precoFinal = 0;
    }
    return precoFinal;
}