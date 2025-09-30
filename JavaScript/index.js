//console.log('Hello, World!');
//Utilize sempre o Camel case no JS

var nomeDaAluna = 'Maria'; //string ( texto) : utilize sempre as aspas.
var idadeDaAluna = 20; //number
var alturaDaAluna = 1.65; //number
var estudante = true; //boolean (true or false)

var semConteudo; //undefined

//console.log(nomeDaAluna);
//console.log(typeof nomeDaAluna);

console.log(nomeDaAluna, typeof nomeDaAluna);

console.log(idadeDaAluna);
console.log(alturaDaAluna);
console.log(estudante);

console.log(semConteudo);

var curso ="Front-end em Javascript", topico = "Variáveis";

console.log(curso, topico);

// ! não utilize o var nos seus códigos JS

let notaDaAluna = 10; //number
const mediaDaAluna = 9.5; //number

notaDaAluna = 9.8;
//mediaDaAluna = 9.7; não é permitido alterar o valor de uma constante

console.log(notaDaAluna);
console.log(mediaDaAluna);