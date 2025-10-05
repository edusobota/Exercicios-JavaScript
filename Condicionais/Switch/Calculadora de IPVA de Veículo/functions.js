function calcularIPVA(valor, modelo, categoria) {
    let resultado;
    switch (categoria) {
        case '1':
            let ipvaPasseio = valor * 0.035;
            resultado = `O modelo ${modelo} (Passeio) no valor de R$ ${valor.toFixed(2)} tem um IPVA de R$ ${ipvaPasseio.toFixed(2)}`;
            break;
        case '2':
            let ipvaUtilitario = valor * 0.025;
            resultado = `O modelo ${modelo} (Utilitário) no valor de R$ ${valor.toFixed(2)} tem um IPVA de R$ ${ipvaUtilitario.toFixed(2)}`;
            break;
        default:
            resultado = `Categoria não reconhecida.`;
    }
    return resultado;
}