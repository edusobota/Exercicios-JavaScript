function analisarNumerosPares() {
    let i = 1;
    let numero;
    let relatorio = '<h3>Números Digitados</h3>';
    let soma = 0;
    let contadorPares = 0;
    let menor = Infinity;
    let maior = -Infinity;
    let media;

    while (i <= 10) {
        numero = prompt(`Digite o ${i}º número:`);

        if (numero === null || numero.trim() === "") {
            return `Erro! Você não digitou nada!`;
        } else if (!isNaN(numero)) {
            numero = Number(numero);
            relatorio += `${numero}<br>`;

            if (numero % 2 === 0) {
                contadorPares++;
                soma += numero;

                if (numero > maior) {
                    maior = numero;
                }
                if (numero < menor) {
                    menor = numero;
                }
            }
        } else {
            return `Erro! Você digitou um caractere inválido!`;
        }
        i++;
    }

    if (contadorPares > 0) {
        media = soma / contadorPares;
        relatorio += `<h3>Análise dos Pares</h3>`;
        relatorio += `Soma dos números pares: ${soma}<br>`;
        relatorio += `Média dos números pares: ${media.toFixed(2)}<br>`;
        relatorio += `Maior número par informado: ${maior}<br>`;
        relatorio += `Menor número par informado: ${menor}`;
    } else {
        relatorio += `Nenhum número par foi digitado.`;
    }

    return relatorio;
}