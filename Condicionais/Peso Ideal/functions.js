function calcularPesoIdeal(sexo, altura) {
    let peso
    if (sexo === "H" || sexo === "h") {
        peso = (72.7 * altura) - 58
    } else if (sexo === "M" || sexo === "m") {
        peso = (62.1 * altura) - 44.7
    }
    return peso
}
