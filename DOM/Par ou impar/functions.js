let placarComputador = 0;
let placarUsuario = 0;
let numeroTentativa = 0;

function jogar() {
  const numeroComputador = Math.floor(Math.random() * 10 + 1);
  const limiteTentativas = Number(document.getElementById("limiteTentativas").value);
  const numeroUsuario = Number(document.getElementById("numeroUsuario").value);
  const escolhaUsuario = document.getElementById("escolhaUsuario").value;

  const soma = numeroUsuario + numeroComputador;
  const resultadoRodada = soma % 2 === 0 ? "par" : "impar";
  const vitoriasNecessarias = Math.floor(limiteTentativas / 2) + 1;

  if (
    placarUsuario >= vitoriasNecessarias ||
    placarComputador >= vitoriasNecessarias ||
    numeroTentativa >= limiteTentativas
  ) {
    document.getElementById("mensagemFinal").innerHTML =
      `Jogo encerrado! Placar final - Você: ${placarUsuario} | PC: ${placarComputador}`;
    return;
  }

  if (escolhaUsuario === resultadoRodada) {
    placarUsuario++;
    document.getElementById("mensagemResultado").innerHTML =
      `Você ganhou!<br>Você: ${numeroUsuario} | PC: ${numeroComputador} | Soma: ${soma} (${resultadoRodada})`;
  } else {
    placarComputador++;
    document.getElementById("mensagemResultado").innerHTML =
      `Você perdeu!<br>Você: ${numeroUsuario} | PC: ${numeroComputador} | Soma: ${soma} (${resultadoRodada})`;
  }

  numeroTentativa++;

  document.getElementById("placarAtual").innerHTML =
    `Placar → Você: ${placarUsuario} | PC: ${placarComputador}`;

  if (placarUsuario >= vitoriasNecessarias || placarComputador >= vitoriasNecessarias) {
    const vencedor =
      placarUsuario > placarComputador ? "Você venceu!" : "O PC venceu!";
    document.getElementById("mensagemFinal").innerHTML =
      `${vencedor} Melhor de ${limiteTentativas}`;
  }
}

function reiniciar() {
  placarComputador = 0;
  placarUsuario = 0;
  numeroTentativa = 0;

  document.getElementById("numeroUsuario").value = "";
  document.getElementById("limiteTentativas").value = "";
  document.getElementById("mensagemResultado").innerHTML = "";
  document.getElementById("placarAtual").innerHTML = "";
  document.getElementById("mensagemFinal").innerHTML = "";
}
