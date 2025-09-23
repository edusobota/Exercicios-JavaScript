function lerVendasProduto(numeroProduto) {
    let vendas = [];
    for (let i = 1; i <= 6; i++) {
        vendas[i] = Number(prompt(`Produto ${numeroProduto}: Informe o valor vendido no mês ${i}`));
    }
    return vendas;
}

function exibirVendasProduto(vendas) {
    for (let i = 1; i <= 6; i++) {
        document.write(`Mês [${i}] = R$ ${vendas[i].toFixed(2)}<br>`);
    }
}

function calcularTotalSemestre(vendas) {
    let soma = 0;
    for (let i = 1; i <= 6; i++) {
        soma += vendas[i];
    }
    return soma;
}

function calcularVendasMensais(vendas1, vendas2, vendas3) {
    let somaMes = [];
    for (let i = 1; i <= 6; i++) {
        somaMes[i] = vendas1[i] + vendas2[i] + vendas3[i];
    }
    return somaMes;
}

function exibirVendasMensais(vendas) {
    for (let i = 1; i <= 6; i++) {
        document.write(`Mês [${i}] = R$ ${vendas[i].toFixed(2)}<br>`);
    }
}

function encontrarPiorMes(vendas) {
    let menorValor = vendas[1];
    let piorMes = 1;
    for (let i = 2; i < vendas.length; i++) {
        if (vendas[i] < menorValor) {
            menorValor = vendas[i];
            piorMes = i;
        }
    }
    return piorMes;
}