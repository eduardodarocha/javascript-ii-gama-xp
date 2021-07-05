const pessoa = {
    nome: "Simara",
    idade: 32,
    cidade: "São Paulo"
}

//Notação de ponto
console.log(pessoa.nome) //"Simara"
console.log(pessoa.cidade) //"São Paulo"
console.log()

//Notação de colchetes propriedade dentro do console
console.log(pessoa['idade']) //32

//Como desestruturar Objetos passando os valores do objeto para as variáveis
const { nome, idade, cidade } = pessoa

console.log(nome) //"Simara"
console.log(idade) //32
console.log(cidade) //São Paulo
console.log(typeof cidade)