import mongoose from "mongoose";
import "dotenv/config";

async function databaseConnector() {
    mongoose.connect(process.env.MONGO_DB_ATLAS_CONNECTION_STRING);
    return mongoose.connection;
}

export default databaseConnector;