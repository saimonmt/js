/*
const readline = require('node:readline');
const rl = readline.createInterface(
//    {
  input: process.stdin //,
 // output: process.stdout,
//}
);
rl.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  rl.close();
});
*/

/// Exercicio 1: Verificar o maior entre dois numeros:
let num1 = 5;
let num2 = 6;

if (num1 > num2){
	console.log("O Valor é maior");
}
else{
	console.log("O Valor é menor");
}

/// Exercicio 2: Determinar se um numero e positivo, negativo ou zero:

let num3 = 0;
//num3 = prompt("Informe um numero: ");
if (num3 > 0){
	console.log("O Valor é positivo");
}
else if ( num3 < 0 ){
	console.log("O Valor é negativo");
}
else{
	console.log("O Valor é zero");
}

/// Exercicio 3: Determinar se uma pessoa e maior ou menor de idade:
//const prompt = require('prompt-sync')
let num4 = 18;
//num4 = prompt("Informe a idade da pessoa: ");
if (num4 >= 18){
	console.log("A pessoa é de maior idade");
}
else{
	console.log("A pessoa é menor de idade");
}

/// Exercicio 4: Converter uma temperatura de Celsius para Fahrenheit:
//const prompt = require('prompt-sync')
let temp = 18;
let res  = 0 ;
//temp = prompt("Informe a temperatura em Celsius para converter para Fahrenheit: ");
res = (temp * 9/5) + 32;
console.log("A temperatura em Fahrenheit é: ");
console.log(res);


/// Exercicio 5: Calcular a area do retangulo:
//const prompt = require('prompt-sync')
let base   = 10;
let altura = 6;
let area   = 0;

//base = prompt("Informe a base do retangulo para o calculo da area: ");
//altura = prompt("Informe a altura para calculo da area: ");

area = base * altura;
if(area > 0 ){
    console.log("A area do retangulo e: ");
    console.log(area);
    }
else{
    console.log("Algum valor informado esta errado para o calculo! ");
}



