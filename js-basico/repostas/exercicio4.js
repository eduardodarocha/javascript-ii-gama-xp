// Exemplo 04
// Quero lucrar
// Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta 
// que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?

let valor = (300 * (100 / 100)) / (60 / 100);

let valorLucro = valor * (25 / 100) + valor;
console.log(`O valor da bicicleta é R$${valor},00`)
console.log(`Devo vender a bicicleta por R$${valorLucro},00 para ter um lucro de 25%`)