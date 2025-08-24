function ordenarCrescente(n1, n2, n3) {
    let aux
    if (n1 > n2) {
        aux = n1
        n1 = n2
        n2 = aux
    }
    if (n1 > n3) {
        aux = n1
        n1 = n3
        n3 = aux
    }
    if (n2 > n3) {
        aux = n2
        n2 = n3
        n3 = aux
    }
    return [n1, n2, n3]
}
