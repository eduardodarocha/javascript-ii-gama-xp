//Imprima na tela os números pares existentes entre 0 e 100.

for (let i = 0; i <= 100; i++){
    if (i % 2  === 0) {
        console.log(i)
    }
}
let cont = 0;
while (cont <= 100) {
    if (cont % 2 === 0) {
        console.log(cont)        
    }
    cont += 1;
}
