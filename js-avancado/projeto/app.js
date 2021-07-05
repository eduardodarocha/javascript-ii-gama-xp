//pegar o input 
//Se for Sim, mostra as categorias disponíveis, pergunta qual categoria ela escolhe
//Se não, mostra todos os livros em ordem crescente pela quantidade de páginas

const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro por categoria?(S/N) ')

if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponiveis:')
  console.log(' ➱ Produtividade', '\n','➱ História brasileira','\n','➱ Américas','\n','➱ Estilo de vida','\n','➱ Tecnologia')

  const entradaCategoria = readline.question('Qual categoria voce escolhe:')

  const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

  console.table(retorno)
} else {
  const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
  // const livrosOrdenados = livros.sort((a,b)=> b.id - a.id)
  console.log('Essas são todos os livros disponiveis:')
  console.table(livrosOrdenados)
}