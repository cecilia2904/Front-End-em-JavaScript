const prompt = require("readline-sync");

const idade = prompt.question("Digite sua idade:");

const idadeNumber= Number(idade); //coerção explícita

console.log(idadeNumber, typeof idadeNumber);

console.log(Boolean(20)); //coerção explícita ou converção manual

console.log(1+"1"); //coerção implícita ou converção automática
console.log(10+"5");
console.log(10-"5");