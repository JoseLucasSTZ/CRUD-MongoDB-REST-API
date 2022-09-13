import autores from "../models/Autor.js"

class AutoresController {

    static listarAutores = (req, res) => {
        autores.find((err, autor) => {
            res.status(200).json(autor)
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
       autor.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Autor atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message:'Autor removido com sucesso'})
            } else {
                res.status(500).send({message: err.message})
             }
        })
    }
}

export default AutoresController;


/*{
    "nome": "João",
    "nacionalidade": "brasileiro"
} */



/*import autor from '../models/Autor.js'

class AutorController {

    static listarAutores = (req, res) => {
        autor.find((err, autor) => {
            res.status(200).json(autor);
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autor(req.body);
        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autor.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message:'Autor atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'autor excluído com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default AutorController;

*/