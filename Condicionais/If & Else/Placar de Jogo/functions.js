function verificarResultado(time1, time2) {
    if (time1 > time2) {
        return `O primeiro time venceu de ${time1} x ${time2}.`;
    } else if (time1 < time2) {
        return `O segundo time venceu de ${time2} x ${time1}.`;
    } else {
        return `Houve empate: ${time1} x ${time2}.`;
    }
}
