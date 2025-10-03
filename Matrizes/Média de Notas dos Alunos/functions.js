function preencherMatriz() {
    let matriz = [];
    for (let i = 0; i < 4; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Number(prompt(`Nota ${j + 1} do Aluno ${i + 1}`));
        }
    }
    return matriz;
}

function exibirMatriz(matriz) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            document.write(`Nota[${i}][${j}] = ${matriz[i][j]}<br>`);
        }
        document.write(`<br>`);
    }
}

function calcularMediasPorLinha(matriz) {
    let medias = [];
    for (let i = 0; i < 4; i++) {
        let soma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
        medias[i] = (soma / matriz[i].length).toFixed(1);
    }
    return medias;
}

function exibirMedias(medias) {
    document.write(`<h3>Médias Finais</h3>`);
    for (let i = 0; i < 4; i++) {
        document.write(`Média Aluno ${i + 1}: ${medias[i]}<br>`);
    }
}