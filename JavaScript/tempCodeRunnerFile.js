const mediaDoAluno = Number(prompt.question("Digite a média do aluno:"));

if (mediaDoAluno >= 7) {
    console.log("Aluno aprovado.");
} else if (mediaDoAluno >= 5) {
    console.log("Aluno em recuperação.");
} else {
    console.log("Aluno reprovado.");
}