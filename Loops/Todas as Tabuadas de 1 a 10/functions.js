function todasTabuadas() {
    let resultado = '';

    for (let i = 1; i <= 10; i++) {
        resultado += `<strong>Tabuada do ${i}</strong><br>`;
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i * j}<br>`;
        }
        resultado += `<br>`;
    }

    return resultado;
}
