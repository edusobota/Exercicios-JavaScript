function analiseNumeros() {
    let soma = 0
    let maior = -Infinity
    let menor = Infinity
    let resultado = ""

    for (let i = 1; i <= 10; i++) {
        let numero = Number(prompt(`Digite o ${i}° número`))

        soma += numero
        resultado += `${i}° número = ${numero}<br>`

        if (numero > maior) {
            maior = numero
        }

        if (numero < menor) {
            menor = numero
        }
    }

    let media = calcularMedia(soma, 10)

    resultado += `<br>Soma: ${soma}`
    resultado += `<br>Média: ${media}`
    resultado += `<br>Maior: ${maior}`
    resultado += `<br>Menor: ${menor}`

    return resultado
}

function calcularMedia(soma, quantidade) {
    return soma / quantidade
}
