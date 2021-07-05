// function

function soma(a,b) {
    return a + b
}

console.log(soma(3,5)) //8

//arrow function - usada em funções anônimas e callbacks

const sum = (num1, num2) => num1 + num2 //sem "{}" quando for só uma linha
//sum - nome da função
//(num1, num2) - parametros
// num1 + num2 - o que a função vai fazer e retornar

// Exemplo com "{}"
const sum1 = (num1, num2) => {
    let result = num1 + num2;
    return result;
}
console.log(sum(5, 9))
console.log(sum1(15, 29))

const sayHello = name => `Hello ${name}`

console.log(sayHello('Mari'))