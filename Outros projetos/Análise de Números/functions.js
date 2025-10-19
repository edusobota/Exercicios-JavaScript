function obterNumeroDoUsuario(ordem) {
    return parseFloat(prompt(`Digite o ${ordem}º número:`));
}

function somarNumeros(somaAtual, numero) {
    return somaAtual + numero;
}

function atualizaMaior(maiorAtual, numero) {
    if (numero > maiorAtual) {
        return numero;
    } else {
        return maiorAtual;
    }
}

function atualizaMenor(menorAtual, numero) {
    if (numero < menorAtual) {
        return numero;
    } else {
        return menorAtual;
    }
}

function ehPar(numero) {
    return numero % 2 === 0;
}

function calcularMedia(soma, totalNumeros) {
    return soma / totalNumeros;
}

function exibirResultados(soma, media, maior, menor, pares, impares) {
    document.write(`<br><br><b>Resultados:</b>`);
    document.write(`<br>Soma: ${soma}`);
    document.write(`<br>Média: ${media.toFixed(2)}`);
    document.write(`<br>Maior número: ${maior}`);
    document.write(`<br>Menor número: ${menor}`);
    document.write(`<br>Quantidade de pares: ${pares}`);
    document.write(`<br>Quantidade de ímpares: ${impares}`);
}