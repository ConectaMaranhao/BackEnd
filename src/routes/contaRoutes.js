import express from "express";
import ContaController from "../controllers/ContaController.js";

const routes = express.Router();

routes.get("/contas", ContaController.getAll);
routes.get("/contas/:id", ContaController.getById);
routes.post("/contas", ContaController.criarConta);
routes.put("/contas/:id", ContaController.atualizarConta);
routes.delete("/contas/:id", ContaController.deletarConta);

export default routes;