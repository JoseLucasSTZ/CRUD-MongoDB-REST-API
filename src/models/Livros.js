import mongoose from "mongoose";
import autores from "./Autor";

const livrosSchema = new mongoose.Schema(
   {
     id: {type: String},
     titulo: {type: String, required: true},
     autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
     n_pag: {type: Number}
   } 
);

const livros = mongoose.model('livros', livrosSchema);

export default livros;