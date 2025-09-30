function calcularSomaMultiplos() {
    let valorN = Number(prompt(`Digite o valor de N`));
    let valorK = Number(prompt(`Digite o valor de K`));
    let soma = 0;
    let mult = 0;
    let resultado = `Múltiplos de ${valorN} (até o ${valorK}º):<br>`;

    for (let i = 1; i <= valorK; i++) {
        mult = valorN * i;
        soma += mult;
        resultado += `${valorN} x ${i} = ${mult}<br>`;
    }

    resultado += `Soma total: ${soma}`;
    return resultado;
}