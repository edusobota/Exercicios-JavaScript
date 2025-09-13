function numerosPares(quantidade) {
    let resultado = ""
    let limite = quantidade * 2

    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            resultado += `${i} - `
        }
    }

    resultado = resultado.slice(0, -3) + "."

    return resultado
}
