function lerNumerosComValidacao() {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros[i] = Number(prompt(`Digite o ${i + 1}º número (entre 1 e 100)`));

        if (validarIntervalo(numeros[i]) === false) {
            alert(`Valor inválido (${numeros[i]}). O programa será encerrado.`);
            return;
        }
    }
    return numeros;
}

function exibirVetor(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        document.write(`vetor[${i}] = ${vetor[i]}<br>`);
    }
}

function validarIntervalo(numero) {
    if (numero >= 1 && numero <= 100) {
        return true;
    } else {
        return false;
    }
}