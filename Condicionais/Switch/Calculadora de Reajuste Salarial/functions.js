function calcularReajuste(salario) {
    let percentual, valorReajuste, novoSalario;
    switch (true) {
        case (salario < 945):
            percentual = 25;
            break;
        case (salario >= 945 && salario <= 1025):
            percentual = 10;
            break;
        case (salario > 1025):
            percentual = 3;
            break;
        default:
            return `Dados incorretos.`;
    }
    valorReajuste = salario * (percentual / 100);
    novoSalario = salario + valorReajuste;
    return `Reajuste de ${percentual}%: R$ ${valorReajuste.toFixed(2)} <br>Novo Salário: R$ ${novoSalario.toFixed(2)}`;
}