import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const routes = express.Router();

routes.get("/usuarios", UsuarioController.getAll);
routes.get("/usuarios/:id", UsuarioController.getById);
routes.post("/usuarios", UsuarioController.criarUsuario);
routes.put("/usuarios/:id", UsuarioController.editarUsuario);
routes.delete("/usuarios/:id", UsuarioController.deletarUsuario);

export default routes;