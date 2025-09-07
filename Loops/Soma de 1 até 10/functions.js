function somarNumeros() {
    let soma = 0;
    let resultado = '';

    for (let numero = 1; numero <= 10; numero++) {
        soma += numero;
        if (numero < 10) {
            resultado += `${numero} + `;
        } else {
            resultado += `${numero} = ${soma}`;
        }
    }

    return resultado;
}
