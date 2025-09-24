function preencherVetor(tamanho) {
    let vetor = [];
    for (let i = 0; i < tamanho; i++) {
        vetor[i] = Number(prompt(`Digite o número ${i + 1} / ${tamanho}`));
    }
    return vetor;
}

function exibirVetor(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        document.write(`vetor [${i}] = ${vetor[i]}<br>`);
    }
}

function somaVet(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma;
}