import mongoose from "mongoose";
import TiposConta from "./enums/TiposConta.js";

const contaSchema = new mongoose.Schema({
    id: { type: mongoose.Types.ObjectId },
    userId: { 
        type: mongoose.Types.ObjectId,
        ref: "usuario",
        required: true
    },
    type: { 
        type: String,
        enum: Object.values(TiposConta),
        required: true
    }
});

const conta = mongoose.model(contaSchema);

export default conta;