function listarImparesAte(limite) {
    let i = 1;
    let listaImpares = "";

    while (i < limite) {
        listaImpares += `${i} - `;
        i += 2;
    }

    if (limite % 2 !== 0) {
        listaImpares = `${listaImpares.slice(0, -3)} - ${limite}.`;
    } else {
        listaImpares = `${listaImpares.slice(0, -3)}.`;
    }

    return listaImpares;
}