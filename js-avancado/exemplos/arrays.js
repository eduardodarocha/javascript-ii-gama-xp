// array
const alunasGama = ["Paula", "Maria", "Estela", "Clara"]

//Acessar informações num array
console.log(alunasGama[3]) //"Clara"

// Operador spread -> (...) copia/espalha em uma nova array os itens de outra array
const alunasXp = [...alunasGama, "Simara"]

console.log(alunasXp)

//-------------Métodos de iteração--------------

//Map 
alunasXp.map(aluna => console.log(aluna))
//aluna - parâmetro da função | map chama a função callback para cada item da array(alunasXp)

//Filter
const numeros = [34, 45, 67, 90, 55, 76, 81, 94]

const numerosImpares = numeros.filter(numero => numero % 2 !=0)
//fitra os números que o resto da divisão por 2 sejam diferentes de 0 e atribui na const numerosImpares(nova array)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero % 2 ==0)
console.log(numerosPares)


const produtos = ["geladeira", "fogão", "cama", "mesa"]

//find

const encontraCama = produtos.find(produto => produto === "cama")
console.log(encontraCama)

const encontraMesa = produtos.find(produto => produto === "mesa")
console.log(encontraMesa)

//sort - ordenação // retorna ao array original sorted

const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b)=> b-a) //retorna ao array original sorted decrescente
console.log(numerosOrdenadosDecrescente)


//reduce - reduz nosso array a um resultado de uma operação matemática

const numbers = [1,34,35]

const soma = numbers.reduce((valorAnterior, valorAtual)=> {
    return valorAnterior + valorAtual
})
const soma1 = numbers.reduce((valorAnterior, valorAtual)=> {
    return valorAnterior + valorAtual
}, 6)
//depois de fazer o reduce, soma o valor 6 ao total

console.log(soma) // 70
console.log(soma1) // 76