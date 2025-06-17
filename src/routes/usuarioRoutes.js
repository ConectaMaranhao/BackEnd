import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/usuarios", usuarioController.getAll);
router.get("/usuarios/:id", usuarioController.getById);
router.post("/usuarios", usuarioController.criarUsuario);
router.put("/usuarios/:id", usuarioController.editarUsuario);
router.delete("/usuarios/:id", usuarioController.apagarUsuario);

export default router;