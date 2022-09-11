import express from "express";
import db from "./config/dbConnect.js"

db.on("error", console.log.bind(console, 'erro de conexão'))
db.once("open", () => {
    console.log('conexão com banco feita com sucesso')
})


const app = express();

app.use(express.json())

const livros = [
    {id: 1,"titulo": "Senhor dos Anéis"},
    {id: 2, "titulo": "O hobbit"}
]

app.get('/', (req, res) => {
    res.status(200).send('hello')
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.send(livros[index]);
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(200).send('Livro cadastrado com sucesso');
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})


app.delete('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.send('Livro removido com sucesso')

})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app