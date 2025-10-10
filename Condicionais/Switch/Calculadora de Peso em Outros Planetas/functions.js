function calcularPesoPlanetario(peso, planeta) {
    let pesoFinal;
    let gravidadeRelativa;

    switch (planeta) {
        case '1':
            gravidadeRelativa = 0.37;
            pesoFinal = `Em Mercúrio, o peso seria de ${((peso / 10) * gravidadeRelativa).toFixed(2)} kg`;
            break;
        case '2':
            gravidadeRelativa = 0.88;
            pesoFinal = `Em Vênus, o peso seria de ${((peso / 10) * gravidadeRelativa).toFixed(2)} kg`;
            break;
        case '3':
            gravidadeRelativa = 0.38;
            pesoFinal = `Em Marte, o peso seria de ${((peso / 10) * gravidadeRelativa).toFixed(2)} kg`;
            break;
        case '4':
            gravidadeRelativa = 2.64;
            pesoFinal = `Em Júpiter, o peso seria de ${((peso / 10) * gravidadeRelativa).toFixed(2)} kg`;
            break;
        case '5':
            gravidadeRelativa = 1.15;
            pesoFinal = `Em Saturno, o peso seria de ${((peso / 10) * gravidadeRelativa).toFixed(2)} kg`;
            break;
        case '6':
            gravidadeRelativa = 1.17;
            pesoFinal = `Em Urano, o peso seria de ${((peso / 10) * gravidadeRelativa).toFixed(2)} kg`;
            break;
        default:
            pesoFinal = `Planeta inválido.`;
    }
    return pesoFinal;
}