function preencherNotas(quantidade) {
    let notas = [];
    for (let i = 0; i < quantidade; i++) {
        notas[i] = Number(prompt(`Informe a nota ${i + 1}: `));
    }
    return notas;
}

function exibirNotas(notas) {
    for (let i = 0; i < notas.length; i++) {
        document.write(`Nota ${i + 1} = ${notas[i]}<br>`);
    }
}

function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }
    let media = soma / notas.length;
    return media;
}

function verificarSituacao(media) {
    if (media >= 7) {
        document.write(`Situação: <b>Aprovado</b><br><br>`);
    } else {
        document.write(`Situação: <b>Reprovado</b><br><br>`);
    }
}