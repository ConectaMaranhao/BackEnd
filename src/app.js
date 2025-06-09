import express from "express";
import routes from "./routes/index.js";
import databaseConnector from "./config/dbConnection.js";
import jsonParser from "./middlewares/typeParser.js";

const connection = await databaseConnector();

connection.on("error", (error) => {
    console.error(`Connection error: ${error}`);
});

connection.once("open", () => {
    console.log("Connected with database.");
});

const app = express();
app.use(jsonParser);

routes(app);

export default app;