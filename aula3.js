// Aula JS 15/04/2025
// Exercicios copiar os exemplos da apostila 3:
function saudacao() {

    console.log("Ola, mundo")
};

saudacao();

function soma(a,b) {
    return a + b;
};

const resultado = soma(3,5);
console.log(resultado);

const pessoa= {
    nome:"Alice",
    idade:30,
    cidade:"Cuiabrasa"
};
console.log(pessoa.nome);
console.log(pessoa["idade"]);
//console.log(pessoa[3]) ;
delete pessoa.nome;
console.log(pessoa.nome);

const calculadora = {
    somar: function(a,b) {
        return a+b;
    },
    subtrair: function(a,b){
        return a-b;
    }
};
console.log(calculadora.somar(5,3));
console.log(calculadora.subtrair(10,4));

const empresa={
    nome:"Minha Empresa",
    endereco: {
        rua: "Rua da Empresa",
        cidade: "Cidade da Empresa"
    }
}
console.log(empresa.endereco.rua);


// Exercicio 1 - Criando um objeto simples
console.log("=== Exercicio 1 ===");
const pessoa1= {
    nome: "Joao",
    idade: 25, 
    apresentar: function() {
        console.log("Ola, meu nome e "+ pessoa1.nome + " e tenho "+ pessoa1.idade + " anos." ) ;
    } 
}
pessoa1.apresentar();

// Exercicio 2 
console.log("=== Exercicio 2 ===");
const cao= {
    nome: "Rex",
    raca: "Labrador", 
    latir: function() {
        console.log("Au Au! ") ;

    },
    mostrardados: function() {
        console.log("Ola, cachorro se chama "+ cao.nome + " e a raca "+ cao.raca + " ." ) ;
    } 
}
cao.latir();
cao.mostrardados();


// Exercicio 3 
console.log("=== Exercicio 3 ===");
const calcfull = {
    somar: function(a,b) {
        return a+b;
    },
    subtrair: function(a,b){
        return a-b;
    },
    multplicar: function(a,b){
        return a*b;
    },
    dividir: function(a,b){
        return a/b;
    },
    resSomar:function(){
        console.log("A soma e: "+ calcfull.somar(5,3));
    },
    resSubtrair:function(){
        console.log("A substracao e: "+ calcfull.subtrair(10,4));
    },
    resMult:function(){
        console.log("A multiplicacao e: "+ calcfull.multplicar(10,4));
    },

    resDividir:function(){
        console.log("A divisao e: "+ calcfull.dividir(10,4));
    }
};
calcfull.resSomar();
calcfull.resSubtrair();
calcfull.resMult();
calcfull.resDividir();

// Exercicio 4 
console.log("=== Exercicio 4 ===");
const lampada= {
    ligada: false,
    
    ligar: function() {
            lampada.ligada = true;
            if (lampada.ligada){
                console.log("A lampada foi ligada! ") ;
            }
            else{
                console.log("A lampada foi desligada! ") ;
                }
    },
    desligar: function() {
            lampada.ligada = false;
            console.log("A lampada foi desligada! ") ;
    }
}
lampada.ligar();
lampada.desligar();
