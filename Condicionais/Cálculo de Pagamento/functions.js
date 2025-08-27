function calcularPagamento(valor, pagamento) {
    let total;

    if (pagamento === 1) {
        total = valor * 0.9;
        return `O valor original era R$ ${valor.toFixed(2)}. Com desconto: R$ ${total.toFixed(2)}`;
    } 
    else if (pagamento === 2) {
        total = valor * 0.85;
        return `O valor original era R$ ${valor.toFixed(2)}. Com desconto: R$ ${total.toFixed(2)}`;
    } 
    else if (pagamento === 3) {
        total = valor / 2;
        return `O valor total é R$ ${valor.toFixed(2)}, dividido em 2x de R$ ${total.toFixed(2)}`;
    } 
    else if (pagamento === 4) {
        total = valor * 1.1;
        return `O valor total é R$ ${total.toFixed(2)}, dividido em 2x de R$ ${(total / 2).toFixed(2)}`;
    } 
    else {
        return "Opção de pagamento inválida!";
    }
}
