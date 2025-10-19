function ehMenorDeIdade(idade) {
    return idade < 18;
}

function pesaMaisQue80(peso) {
    return peso > 80;
}

function obterIdade(jogador, time) {
    return Number(prompt(`Time ${time}: Digite a idade do jogador n° ${jogador}`));
}

function obterPeso(jogador, time) {
    return Number(prompt(`Time ${time}: Digite o peso do jogador n° ${jogador}`));
}

function obterAltura(jogador, time) {
    return Number(prompt(`Time ${time}: Digite a altura do jogador n° ${jogador}`));
}

function gerarRelatorioCampeonato() {
    let menoresDe18 = 0;
    let maisDe80kg = 0;
    let relatorio = "";
    let somaAlturaTotal = 0;

    for (let time = 1; time <= 5; time++) {
        let somaIdadeTime = 0;
        relatorio += `<h3>Dados do Time ${time}</h3>`;

        for (let jogador = 1; jogador <= 11; jogador++) {
            let idade = obterIdade(jogador, time);
            let peso = obterPeso(jogador, time);
            let altura = obterAltura(jogador, time);

            if (ehMenorDeIdade(idade)) {
                menoresDe18++;
            }
            if (pesaMaisQue80(peso)) {
                maisDe80kg++;
            }

            relatorio += `Jogador ${jogador} | Idade: ${idade} | Peso: ${peso}kg | Altura: ${altura.toFixed(2)}m<br>`;
            somaIdadeTime += idade;
            somaAlturaTotal += altura;
        }

        let mediaIdadeTime = somaIdadeTime / 11;
        relatorio += `<br><b>Média de idade do time ${time}:</b> ${mediaIdadeTime.toFixed(1)} anos<br><br>`;
    }

    let mediaAlturaCampeonato = somaAlturaTotal / 55;
    let percentualMaisDe80kg = (maisDe80kg / 55) * 100;

    relatorio += `<h3>Estatísticas Gerais do Campeonato</h3>`;
    relatorio += `<b>Quantidade de jogadores com menos de 18 anos:</b> ${menoresDe18}<br>`;
    relatorio += `<b>Média de altura de todos os jogadores:</b> ${mediaAlturaCampeonato.toFixed(2)}m<br>`;
    relatorio += `<b>Percentual de jogadores com mais de 80kg:</b> ${percentualMaisDe80kg.toFixed(1)}%<br>`;

    return relatorio;
}