import express from "express";
import EmpresaController from "../controllers/empresaController.js";

const routes = express.Router();

routes.get("/empresas", EmpresaController.listarEmpresas);
routes.get("/empresas/:id", EmpresaController.listarEmpresaPorId);
routes.post("/empresas", EmpresaController.cadastrarEmpresa);
routes.put("/empresas/:id", EmpresaController.atualizarEmpresa);
routes.delete("/empresas/:id", EmpresaController.excluirEmpresa);

export default routes;
