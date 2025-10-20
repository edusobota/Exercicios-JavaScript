let tentativas = 0;
const limiteTentativas = 3;
let numeroSecreto = Math.floor(Math.random() * 20 + 1);
let acertou = false;

function verificarNumero() {
  if (acertou || tentativas >= limiteTentativas) {
    document.getElementById("mensagemResultado").innerHTML = "Fim de jogo!";
    document.getElementById("mensagemCorreta").innerHTML = `O valor certo era: ${numeroSecreto}`;
    return;
  }

  const numeroDigitado = Number(document.getElementById("numeroUsuario").value);

  if (numeroDigitado < numeroSecreto) {
    document.getElementById("mensagemResultado").innerHTML = "O número é maior";
  } else if (numeroDigitado > numeroSecreto) {
    document.getElementById("mensagemResultado").innerHTML = "O número é menor";
  } else {
    acertou = true;
    document.getElementById("mensagemResultado").innerHTML = `Acertou com ${tentativas + 1} tentativa(s)!`;
  }

  tentativas++;
  document.getElementById("mensagemTentativas").innerHTML = `Tentativas: ${tentativas}`;

  if (!acertou && tentativas >= limiteTentativas) {
    document.getElementById("mensagemResultado").innerHTML = "Fim de jogo!";
    document.getElementById("mensagemCorreta").innerHTML = `O valor certo era: ${numeroSecreto}`;
  }
}

function reiniciar() {
  tentativas = 0;
  acertou = false;
  numeroSecreto = Math.floor(Math.random() * 20 + 1);

  document.getElementById("numeroUsuario").value = "";
  document.getElementById("mensagemResultado").innerHTML = "Aguardando...";
  document.getElementById("mensagemTentativas").innerHTML = "Tentativas: 0";
  document.getElementById("mensagemCorreta").innerHTML = "O valor certo era: ***";
}
