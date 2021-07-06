//Exemplo 01 
//Variáveis - Vamos criar variáveis usando let, const e var, atribuir valores, 
//identificar comportamentos e saídas quando tentarmos recuperar. 

//-----Declaração e atribuição de valores---
var varvar1 = 3;
console.log('Variável tipo var inicial: ' + varvar1);

let varlet1 = 5;
console.log('Variável tipo let inicial: ' + varlet1);

const varconst1 = 7;
console.log('Variável tipo const inicial: ' + varconst1);

//-------Reatribuição de valores--------
varvar1 = 4;
console.log('Variável tipo var reatribuida: ' + varvar1);  // Variável tipo var reatribuida: 4

varlet1 = 41; 
console.log('Variável tipo let  reatribuida: ' + varlet1)//Variável tipo let  reatribuida: 41

// varconst1 = 51; //TypeError: Assignment to constant variable.

//-------Redeclaração--------
var varvar1;
console.log('Variável tipo var redeclarada: ' + varvar1);// Variável tipo var redeclarada: 4

//let varlet1;
//console.log('Variável tipo let redeclarada: ' + varlet1); // SyntaxError: Identifier 'varlet1' has already been declared

//let varconst1;
//console.log('Variável tipo const redeclarada: ' + varconst1); // SyntaxError: Identifier 'varconst1' has already been declared