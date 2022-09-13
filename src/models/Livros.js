import mongoose from "mongoose";

const livrosSchema = new mongoose.Schema(
   {
     id: {type: String},
     titulo: {type: String, required: true},
     autor: {type: String, required: true},
     n_pag: {type: Number}
   } 
);

const livros = mongoose.model('livros', livrosSchema);

export default livros;