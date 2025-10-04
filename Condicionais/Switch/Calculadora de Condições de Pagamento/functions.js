function calcularValorFinal(valor, opcao) {
    let resultado;
    switch (opcao) {
        case '1':
            let valorComDesconto10 = valor - (valor * 0.10);
            resultado = `Desconto de 10%: <br> R$ ${valor.toFixed(2)} -> R$ ${valorComDesconto10.toFixed(2)}`;
            break;
        case '2':
            let valorComDesconto15 = valor - (valor * 0.15);
            resultado = `Desconto de 15%: <br> R$ ${valor.toFixed(2)} -> R$ ${valorComDesconto15.toFixed(2)}`;
            break;
        case '3':
            let parcelaSemJuros = valor / 2;
            resultado = `Em 2x sem juros: <br> 2 parcelas de R$ ${parcelaSemJuros.toFixed(2)}`;
            break;
        case '4':
            let valorComJuros = valor * 1.10;
            let parcelaComJuros = valorComJuros / 2;
            resultado = `Em 2x com juros de 10%: <br> 2 parcelas de R$ ${parcelaComJuros.toFixed(2)} <br> Total: R$ ${valorComJuros.toFixed(2)}`;
            break;
        default:
            resultado = `Opção de pagamento inválida.`;
    }
    return resultado;
}