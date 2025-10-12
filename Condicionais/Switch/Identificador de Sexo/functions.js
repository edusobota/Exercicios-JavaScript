function identificarSexo(sigla) {
    let resultado;
    switch (sigla) {
        case "m":
        case "M":
            resultado = "Masculino";
            break;
        case "f":
        case "F":
            resultado = "Feminino";
            break;
        default:
            resultado = "Caractere não reconhecido!";
    }
    return resultado;
}