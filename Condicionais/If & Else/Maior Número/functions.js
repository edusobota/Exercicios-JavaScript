function encontrarMaior(numero1, numero2, numero3) {
    let maior
    if (numero1 >= numero2 && numero1 >= numero3) {
        maior = numero1
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        maior = numero2
    } else {
        maior = numero3
    }
    return maior
}