const alunos = [
    {aluno: 'João', nota: 4},
    {aluno: 'Maria', nota: 10},
    {aluno: 'Carlos', nota: 6},
    {aluno: 'Beatriz', nota: 8},
]

function filtrarAlunosAprovados(aluno) {
    return aluno.nota >= 6;
}
const alunosAprovados = alunos.filter(filtrarAlunosAprovados)
console.log(alunosAprovados)





