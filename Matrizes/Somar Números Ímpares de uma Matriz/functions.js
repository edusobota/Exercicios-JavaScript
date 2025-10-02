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

function encontrarImpares(matriz) {
    let linhas = [];
    let colunas = [];
    let numeros = [];
    let contador = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (matriz[i][j] % 2 !== 0) {
                linhas[contador] = i;
                colunas[contador] = j;
                numeros[contador] = matriz[i][j];
                contador++;
            }
        }
    }
    return [linhas, colunas, numeros, contador];
}

function exibirImpares(linhas, colunas, numeros, quantidade) {
    for (let i = 0; i < quantidade; i++) {
        document.write(`Mat[${linhas[i]}][${colunas[i]}] = ${numeros[i]}<br>`);
    }
}

function somaImpares(numeros, quantidade) {
    let soma = 0;
    for (let i = 0; i < quantidade; i++) {
        soma += numeros[i];
    }
    return soma;
}