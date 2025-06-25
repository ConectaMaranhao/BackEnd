import usuarios from "./usuarioRoutes.js";
import empresas from "./empresasRoutes.js";
import contas from "./contaRoutes.js";
import cursos from "./cursosRoutes.js";
import pessoas from "./pessoasRoutes.js";
import matriculas from "./matriculaRoutes.js";
import rotasPublicas from "./authRoutes.js";
import autenticacao from "../middlewares/authMiddleware.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Server on."));
  
  app.use(rotasPublicas);
  
  app.use(autenticacao); // middleware
  
  app.use(usuarios);
  app.use(empresas);
  app.use(contas);
  app.use(cursos)
  app.use(pessoas)
  app.use(matriculas);
};

export default routes;
