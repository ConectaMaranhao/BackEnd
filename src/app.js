import express from "express";
import cors from "cors";
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
app.use(cors({
    origin: ["http://localhost:5173","https://conectamaranhao.github.io"]
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
}));

routes(app);

export default app;
