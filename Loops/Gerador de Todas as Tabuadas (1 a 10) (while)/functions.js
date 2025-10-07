function gerarTodasTabuadasWhile() {
    let i = 1;
    let produto = 0;
    let textoTabuadas = '';

    while (i <= 10) {
        textoTabuadas += `<h3>Tabuada do ${i}</h3>`;
        let j = 1;
        while (j <= 10) {
            produto = i * j;
            textoTabuadas += `${i} x ${j} = ${produto}<br>`;
            j++;
        }
        i++;
    }
    return textoTabuadas;
}