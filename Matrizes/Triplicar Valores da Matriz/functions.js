function preencherMatriz() {
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = Number(prompt(`Posição [${i}][${j}]`));
        }
    }
    return matriz;
}

function exibirMatriz(matriz) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            document.write(`Mat[${i}][${j}] = ${matriz[i][j]}<br>`);
        }
        document.write(`<br>`);
    }
}

function triplicarMatriz(matriz) {
    let matrizResultado = [];
    for (let i = 0; i < 3; i++) {
        matrizResultado[i] = [];
        for (let j = 0; j < 4; j++) {
            matrizResultado[i][j] = matriz[i][j] * 3;
        }
    }
    return matrizResultado;
}