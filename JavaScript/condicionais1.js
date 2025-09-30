const prompt = require('readline-sync');

const idade = Number(prompt.question("Digite sua idade:"));

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}   


const mediaDoAluno = Number(prompt.question("Digite a média do aluno:"));

if (mediaDoAluno >= 7) {
    console.log("Aluno aprovado.");
} else if (mediaDoAluno >= 5) {
    console.log("Aluno em recuperação.");
} else {
    console.log("Aluno reprovado.");
}