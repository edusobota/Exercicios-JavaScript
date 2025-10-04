function gerarTabuada(numero) {
    let i = 1;
    let produto = 0;
    let tabuada = `<h3>Tabuada do ${numero}</h3>`;

    do {
        produto = numero * i;
        tabuada += `${numero} x ${i} = ${produto}<br>`;
        i++;
    } while (i <= 10);

    return tabuada;
}