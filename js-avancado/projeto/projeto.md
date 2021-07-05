## Nosso projetinho do módulo js avançado

Vamos criar um sistema que armazena informações de livros .


> Passo a passo:
> 
1) Criar uma pasta e seguir os passos abaixo:
   
Passo 1: Inicializar um projeto node
```
npm init -y
```

Passo 2: Instalar a dependência readline-sync que simula a entrada de dados de usuários
```
npm i --save readline-sync
```

Passo 3: crie o script de start 
```
"scripts": {
    "start": "node app.js"
  },
  ```

Passo 4: criar arquivo .gitignore e incluir a linha -> node_modules

Passo 5: criar um arquivo (database.js) que simula um database, no formato array de objetos contendo alguns dos livros que você já leu ou gostaria de ler com os seguintes campos:
```
const livros = [
{ 
  nome: string,
  categoria: string,
  autor: string,
  paginas: number,
  recomenda: boolean,
  leu: boolean,
},
{ 
  nome: string,
  categoria: string,
  autor: string,
  paginas: number,
  recomenda: boolean,
  leu: boolean,
} 
]
```
Não esqueça de exportar
```
module.exports = livros
```

Passo 6: criar o arquivo app.js

Passo 9: Rodar projeto 
```
npm start
```

**`E partiu codar!`**

2) No arquivo app.js desenvolva sua lógica para o comportamento abaixo:

   - deverá ser possível buscar livros pela categoria
  
   - caso a pessoa usuária não escolha buscar, deverá mostrar todos os livros cadastrados, ordenados de forma crescente por quantidade de páginas.
  