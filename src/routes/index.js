import express from "express";
import users from "./userRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Server on."));
    app.use(users);
}

export default routes;