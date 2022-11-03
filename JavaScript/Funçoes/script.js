//Funções
/*
    function nomedafuncao (parametros){
        acoes
    }
*/

var a = 7
var b = 8
var total = a + b
console.log(total)


function soma(c,d){
    var total = c + d 
    return console.log(total)
}

soma(45,56)
soma(5,2)

//calculo da area de um quadrado 
function quadrado(lado){
    var area = lado*lado;
    return console.log(area)
}

quadrado(4)

function area(lido,loda){
    var valor = lido*loda
    return console.log(valor)
}

area(5,6)

//função

function pi(){
    return 3.1415
}

function corFavorita(cor){
    if(cor === 'azul'){
        return 'Gosta de Ceu'
    }else if (cor === 'verde'){
        return "È porco"
    }else{
        return 'chatão voce em!'
    }
    }


