function gerarTodasTabuadas() {
    let i = 1;
    let produto = 0;
    let textoTabuadas = '';

    do {
        textoTabuadas += `<h3>Tabuada do ${i}</h3>`;
        let j = 1;
        do {
            produto = i * j;
            textoTabuadas += `${i} x ${j} = ${produto}<br>`;
            j++;
        } while (j <= 10);
        i++;
    } while (i <= 10);

    return textoTabuadas;
}