import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/users", usuarioController.getAll);
router.post("/users", usuarioController.criarUsuario);

export default router;