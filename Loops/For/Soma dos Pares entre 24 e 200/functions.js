function somarPares() {
    let soma = 0;
    let resultado = '';

    for (let numero = 24; numero <= 200; numero += 2) {
        soma += numero;
        if (numero < 200) {
            resultado += `${numero} + `;
        } else {
            resultado += `${numero} = ${soma}`;
        }
    }

    return resultado;
}
