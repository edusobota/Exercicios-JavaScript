function mostrarNumerosPares() {
    let resultado = '';
    for (let numero = 1; numero < 600; numero++) {
        if (numero % 2 === 0) {
            resultado += `${numero} - `;
        }
    }
    resultado += '600.';
    return resultado;
}
