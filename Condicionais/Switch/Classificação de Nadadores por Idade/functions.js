function definirCategoriaNatacao(idade) {
    let categoria;
    switch (true) {
        case (idade >= 5 && idade <= 7):
            categoria = "Infantil A (5 a 7 anos)";
            break;
        case (idade >= 8 && idade <= 10):
            categoria = "Infantil B (8 a 10 anos)";
            break;
        case (idade >= 11 && idade <= 13):
            categoria = "Juvenil A (11 a 13 anos)";
            break;
        case (idade >= 14 && idade <= 17):
            categoria = "Juvenil B (14 a 17 anos)";
            break;
        case (idade >= 18 && idade <= 60):
            categoria = "Adulto (18 a 60 anos)";
            break;
        case (idade > 60):
            categoria = "Sênior (maiores de 60 anos)";
            break;
        default:
            categoria = "Idade inválida para classificação";
            break;
    }
    return categoria;
}