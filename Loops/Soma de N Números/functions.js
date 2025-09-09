function somarQuantidade(quantidade) {
    let soma = 0;
    let resultado = '';

    for (let i = 1; i <= quantidade; i++) {
        let numero = Number(prompt(`Digite um número`));
        soma += numero;

        if (i < quantidade) {
            resultado += `${numero} + `;
        } else {
            resultado += `${numero} = ${soma}`;
        }
    }

    return resultado;
}
