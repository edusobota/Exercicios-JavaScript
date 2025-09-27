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

function contarMaioresQueDez(matriz) {
    let contador = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] > 10) {
                contador++;
            }
        }
    }
    return contador;
}

function exibirContagem(quantidade) {
    if (quantidade > 0) {
        document.write(`Há ${quantidade} valor(es) maior(es) que 10.`);
    } else {
        document.write(`Não foi encontrado nenhum valor maior que 10.`);
    }
}