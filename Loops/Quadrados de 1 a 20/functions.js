function quadrados() {
    let resultado = "";
    
    for (let i = 1; i <= 20; i++) {
        let quadrado = i * i;
        resultado += `${i} ^ 2 = ${quadrado}<br>`;
    }

    return resultado;
}