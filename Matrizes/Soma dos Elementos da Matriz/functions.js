function preencherMatriz() {
    let matriz = [];
    for (let i = 0; i < 4; i++) {
        matriz[i] = [];
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = Number(prompt(`Posição [${i}][${j}]`));
        }
    }
    return matriz;
}

function exibirMatriz(matriz) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            document.write(`Mat[${i}][${j}] = ${matriz[i][j]}<br>`);
        }
        document.write(`<br>`);
    }
}

function somarElementosMatriz(matriz) {
    let soma = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}