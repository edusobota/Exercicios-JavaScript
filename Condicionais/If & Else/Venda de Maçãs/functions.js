function calcularVenda(quantidade) {
    let precoUnitario
    if (quantidade < 12) {
        precoUnitario = 0.30
    } else {
        precoUnitario = 0.25
    }
    let valorTotal = precoUnitario * quantidade
    return [valorTotal, precoUnitario]
}
