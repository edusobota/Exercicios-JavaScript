function calcularProdutoPorSoma() {
    let multiplicando = Number(prompt(`Digite um número (multiplicando):`));
    let multiplicador = Number(prompt(`Digite outro número (multiplicador, maior que ${multiplicando}):`));
    let resultado = ``;
    let soma = 0;

    for (let i = 1; i <= multiplicador; i++) {
        resultado += `${multiplicando} + `;
        soma = multiplicando * multiplicador;
    }

    resultado = `${resultado.slice(0, -2)} = `;
    resultado += `${soma}`;

    return resultado;
}