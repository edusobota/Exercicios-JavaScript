function calcularMediasEscola() {
    let turma;
    let media = 0;
    let alunos;
    let contadorAluno;
    let resultado = "";
    let notaAluno;
    let alunosAcima7 = 0;
    let totalAlunos = 0;
    let somaNotas = 0;

    for (turma = 1; turma <= 5; turma++) {
        alunos = Number(prompt(`Digite a quantidade de alunos da turma ${turma}`));
        resultado += `Turma: ${turma} | Alunos: ${alunos}<br>`;
        alunosAcima7 = 0;

        totalAlunos += alunos;

        for (contadorAluno = 1; contadorAluno <= alunos; contadorAluno++) {
            notaAluno = Number(prompt(`Digite a nota do aluno ${contadorAluno} / ${alunos} da turma ${turma}`));
            resultado += `Nota: ${notaAluno}<br>`;

            if (notaAluno > 7) {
                alunosAcima7++;
            }

            somaNotas += notaAluno;
        }
        resultado += `Alunos com média superior a 7: ${alunosAcima7}<br><br>`;
        alunosAcima7 = 0;
    }
    media = somaNotas / totalAlunos;
    resultado += `<br>Média geral da escola: ${media.toFixed(0)}`;
    return resultado;
}