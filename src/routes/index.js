import express from "express";
import users from "./userRoutes.js";
import empresas from "./empresasRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Server on."));
  app.use(users);
  app.use(express.json(), empresas);
};

export default routes;
