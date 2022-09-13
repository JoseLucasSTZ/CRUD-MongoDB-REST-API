import express from "express";
import AutoresController from "../controller/AutoresController.js"

const router = express.Router();

router
    .get("/autores", AutoresController.listarAutores)
    .post("/autores", AutoresController.cadastrarAutor)
    .put("/autores/:id", AutoresController.atualizarAutor)
    .delete("/autores/:id", AutoresController.excluirAutor)

export default router;