function preencherMatriz() {
    let matriz = [];
    for (let i = 0; i < 5; i++) {
        matriz[i] = [];
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = Number(prompt(`Posição [${i}][${j}]`));
        }
    }
    return matriz;
}

function exibirMatriz(matriz) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            document.write(`Mat[${i}][${j}] = ${matriz[i][j]}<br>`);
        }
        document.write(`<br>`);
    }
}

function calcularDiferenca(matriz1, matriz2) {
    let matrizResultado = [];
    for (let i = 0; i < 5; i++) {
        matrizResultado[i] = [];
        for (let j = 0; j < 5; j++) {
            matrizResultado[i][j] = matriz1[i][j] - matriz2[i][j];
        }
    }
    return matrizResultado;
}