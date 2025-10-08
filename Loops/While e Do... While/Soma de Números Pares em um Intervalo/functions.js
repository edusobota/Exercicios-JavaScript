function somarParesIntervalo() {
    let i = 24;
    let soma = 0;
    let expressaoSoma = "";

    do {
        soma += i;
        expressaoSoma += `${i} + `;
        i += 2;
    } while (i <= 200);

    expressaoSoma = `${expressaoSoma.slice(0, -2)}`;
    expressaoSoma += ` = ${soma}`;

    return expressaoSoma;
}