import usuarios from "./usuarioRoutes.js";
import empresas from "./empresasRoutes.js";
import contas from "./contaRoutes.js";
import cursos from "./cursosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Server on."));
  app.use(usuarios, empresas, contas, cursos);
}

export default routes;
