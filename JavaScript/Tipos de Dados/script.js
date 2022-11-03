//tipos de dados
 
//todos são primitimos exceto os objetos.
var nome = "joão" // String
var idade = 16 // number
var verdadeirooufalso = true // Boolean
var time; //Undefined
var comida = null
var novoObjeto = {} // object


//objetos
const alunos = {
    NomeDoAluno: 'Erick',
    idadedoaluno: 16,
    timedoaluno : false,
}

    console.log(alunos)

//verificar os tipos de dados
console.log(typeof nome); 
console.log(typeof idade);
console.log(typeof verdadeirooufalso);
console.log(typeof time);
console.log(typeof comida);
console.log(typeof novoObjeto);

//voce pode somar string e assim concatenar as palavras.

var nome2= 'joao'
var sobrenome = 'vitor'
var nomecompleto = nome2 + " " + sobrenome;
console.log(nomecompleto)

//voce ode somar numeros com strings , o resultado final seá sempre uma string.

var  gols = 1000;
var frase = 'pelé fez ' + gols +  ' gols'
console.log(frase)

//template string
var golacos = 1000;
var frase2 = `joao vitor fez mais de ${golacos} gols`
console.log(frase2)

let carro = "voyage"
console.log(carro)
var numero = 15;
console.log(numero)
var idade = 16;
console.log(idade)
var nome2= 'joao'
var sobrenome = 'vitor'
var nomecompleto = nome2 + " " + sobrenome;
console.log(nomecompleto)

let itstime = "it's time"

console.log(typeof nomecompleto)



//faça um programa que faça dois numeros para o usuario. Imprima a soma desses dois numeros.



var soma = parseInt(prompt("digite um valor unico:"))
var soma2 = parseInt(prompt("digite o outro valor:"))
var total = soma + soma2
console.log(total)