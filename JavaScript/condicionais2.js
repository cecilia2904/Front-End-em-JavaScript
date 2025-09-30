const permissoes = "aluno"; // pode ser "aluno", "professor" ou "admin"

switch (permissoes) {
    case "aluno":
        console.log("Acesso permitido ao conteúdo do curso.");
        break;
    case "professor":
        console.log("Acesso permitido ao conteúdo do curso e à área de notas.");
        break;
    case "admin":
        console.log("Acesso total ao sistema.");
        break;
    default:
        console.log("Acesso negado.");
}   