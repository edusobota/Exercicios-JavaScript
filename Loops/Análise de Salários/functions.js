function encontrarMaiorSalario() {
    let maiorSalario = -Infinity;
    let resposta = "";
    let i;

    for (i = 0; i < 10; i++) {
        let nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
        let salario = Number(prompt(`Digite o salário de ${nome}:`));

        if (salario > maiorSalario) {
            maiorSalario = salario;
            resposta = `<br>Maior salário: R$ ${maiorSalario} pertecente à: ${nome}<br>`;
        }
    }
    
    return resposta;
}