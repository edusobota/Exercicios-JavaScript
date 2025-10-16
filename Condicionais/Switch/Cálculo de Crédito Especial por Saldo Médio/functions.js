function calcularCredito(saldo) {
    let resultado;
    switch (true) {
        case (saldo >= 0 && saldo <= 200):
            resultado = `Saldo Médio: R$ ${saldo.toFixed(2)}<br>Nenhum crédito disponível.`;
            break;
        case (saldo > 200 && saldo <= 400):
            let credito20 = saldo * 0.2;
            resultado = `Saldo Médio: R$ ${saldo.toFixed(2)}<br>Crédito de 20%: R$ ${credito20.toFixed(2)}`;
            break;
        case (saldo > 400 && saldo <= 600):
            let credito30 = saldo * 0.3;
            resultado = `Saldo Médio: R$ ${saldo.toFixed(2)}<br>Crédito de 30%: R$ ${credito30.toFixed(2)}`;
            break;
        case (saldo > 600):
            let credito40 = saldo * 0.4;
            resultado = `Saldo Médio: R$ ${saldo.toFixed(2)}<br>Crédito de 40%: R$ ${credito40.toFixed(2)}`;
            break;
        default:
            resultado = `Dados incorretos.`;
    }
    return resultado;
}