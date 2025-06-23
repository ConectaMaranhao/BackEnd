import express from "express";
import MatriculaController from "../controllers/MatriculaController.js";

const routes = express.Router();

routes.get("/matriculas", MatriculaController.getAll);
routes.get("/matriculas/:id", MatriculaController.getById);
routes.post("/matriculas", MatriculaController.criarMatricula);
routes.put("/matriculas/:id", MatriculaController.alterarMatricula);
routes.delete("/matriculas/:id", MatriculaController.deletarMatricula);

export default routes;