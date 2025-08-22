function validarNumeros(numero1, numero2) {
    if (numero1 === numero2) {
        window.alert("Números iguais, tente novamente")
        let novo1 = Number(prompt("Digite o primeiro número"))
        let novo2 = Number(prompt("Digite o segundo número"))
        if (novo1 === novo2) {
            window.alert("Os números ainda são iguais, fim")
            return null
        }
        return [novo1, novo2]
    }
    return [numero1, numero2]
}

function menorNumero(numero1, numero2) {
    if (numero1 < numero2) {
        return numero1
    } else {
        return numero2
    }
}
