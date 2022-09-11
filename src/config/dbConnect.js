import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:506070@cluster0.plwpj6n.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection;

export default db;