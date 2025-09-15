function verificarParesImpares() {
    let pares = 0
    let impares = 0
    let resultado = ""

    for (let i = 1; i <= 10; i++) {
        let numero = Number(prompt(`Digite o ${i}° número`))

        if (numero % 2 === 0) {
            resultado += `${numero} é par<br>`
            pares++
        } else {
            resultado += `${numero} é ímpar<br>`
            impares++
        }
    }

    resultado += `<br>Total de pares: ${pares}`
    resultado += `<br>Total de ímpares: ${impares}`

    return resultado
}
