function preencherMatriz() {
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Number(prompt(`Posição [${i}][${j}]`));
        }
    }
    return matriz;
}

function exibirMatriz(matriz) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.write(`Mat[${i}][${j}] = ${matriz[i][j]}<br>`);
        }
        document.write(`<br>`);
    }
}

function encontrarUltimaOcorrencia(valorBuscado, matriz) {
    let linha;
    let coluna;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] === valorBuscado) {
                linha = i;
                coluna = j;
            }
        }
    }
    return [linha, coluna];
}

function exibirLocalizacao(linha, coluna, valorBuscado) {
    if (!isNaN(linha) && !isNaN(coluna)) {
        document.write(`O valor ${valorBuscado} está na linha ${linha} e coluna ${coluna}.<br>`);
    } else {
        document.write(`Não encontrado.`);
    }
}