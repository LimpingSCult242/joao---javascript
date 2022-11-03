var pessoa = {
    nome: "Grazi",
    Idade: 20,
    profissa: 'Monitora do professor bonitão' ,
    faculdade: true,
}

pessoa.Idade
console.table(pessoa)

//Obejto com funçoes ou metodos

var quadrado = {
    perimetro: function (lado){
    return lado + lado + lado + lado
    },

    area: function (lado){
    return lado*lado
},
}

//Arrays

//é uma grupo de valores geralmente relacionados. Servem para guardarmos diferente valores em uma unica variavel.

var videogame =  ['Ps4', 'Xbox', 'Switch']

console.log (videogame.length)


