function definirParImpar(valor) {
    switch (valor % 2) {
        case 0:
            return "par";
        default:
            return "ímpar";
    }
}