//Array com vários objetos
const filmes = [
    { 
        id: 1,
        titulo: "Dilema das Redes",
        descricao: "Um documentario sobre tecnologia.",
        duracao: 120
    },
    { 
        id: 2,
        titulo: "Us",
        descricao: "Um filme de terror legal demais.",
        duracao: 120
    },
    { 
        id: 3,
        titulo: "Corra",
        descricao: "Um filme de suspense bem legal.",
        duracao: 120
    },
]

// Como desestruturar objetos passando os valores do objeto para as os nomes dos atributos
const [{id, titulo, descricao, duracao}]  = filmes

filmes.map(filme => console.log(filme1.descricao))
filmes.map(filmeTitle => console.log(filmeTitle.titulo))