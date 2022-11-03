//array
//é um grupo de valores . servem para guardarmos diferentes valores em uma unica variavel.
/*
var videoGames = ['Switch','PS4','Xbox'];

var numeros = [1,2,3]
console.log(videoGames[0])
console.log(videoGames[1])
console.log(videoGames[3])

console.log(numeros[0]+numeros[2])
*/
/*
var i = 0;
while(i<10){
    console.log(i);
    i = i + 1
}
*/
/*
for (var i = 0; i< 10; i+1){
    console.log(i)
}
*/


//foreach
//foreach é um metodo que execulta uma funçao para cada item array. É uma forma mais simples de utilizarmos umloop com arrays
/*
videoGames.forEach(function(a){
    console.log(a)
        
})
*/
var borabil = ['1958','1962','1970','1994','2002']
borabil.forEach(function (n){
    console.log(`Ò Brasil ganhou a copa do ano ${n}`)
})