function verificarLetra(letra) {
    letra = letra.toLowerCase();

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        return `A letra ${letra.toUpperCase()} é uma vogal.`;
    } else {
        return `A letra ${letra.toUpperCase()} é uma consoante.`;
    }
}
