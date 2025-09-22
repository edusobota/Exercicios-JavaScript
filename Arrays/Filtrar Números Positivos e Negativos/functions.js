function preencherVetor(tamanho) {
    let vetor = [];
    for (let i = 0; i < tamanho; i++) {
        vetor[i] = Number(prompt(`Digite o número ${i + 1}/${tamanho}`));
    }
    return vetor;
}

function exibirVetor(vetor) {
    if (vetor.length === 0) {
        document.write(`Nenhum número encontrado.<br>`);
        return;
    }
    for (let i = 0; i < vetor.length; i++) {
        document.write(`vetor[${i}] = ${vetor[i]}<br>`);
    }
}

function filtrarPositivos(vetor) {
    let vetorPositivos = [];
    let j = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 0) {
            vetorPositivos[j] = vetor[i];
            j++;
        }
    }
    return vetorPositivos;
}

function filtrarNegativos(vetor) {
    let vetorNegativos = [];
    let j = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            vetorNegativos[j] = vetor[i];
            j++;
        }
    }
    return vetorNegativos;
}