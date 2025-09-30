const numero1=10;
const numero2=5;

console.log(numero1 > numero2);
console.log(numero1 < numero2);
console.log(numero1 == numero2);
console.log(numero1 === numero2);
console.log(numero1 != numero2);
console.log(numero1 !== numero2);
console.log(numero1 == "10"); //true
console.log(numero1 === "10"); //false

const idadePessoa1=20;
const idadePessoa2=39;
console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18); //true
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);//true
console.log(!(idadePessoa1 >= 18)); //false