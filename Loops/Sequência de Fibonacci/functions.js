function gerarFibonacci() {
    let numero = Number(prompt(`Digite o número de termos para a sequência de Fibonacci:`));
    let sequencia = "";
    let anterior = 0;
    let atual = 1;
    let proximo;

    for (let i = 0; i < numero; i++) {
        proximo = anterior + atual;
        anterior = atual;
        atual = proximo;

        sequencia += `${proximo}, `;
    }
    sequencia = sequencia.slice(0, -2);

    return sequencia;
}