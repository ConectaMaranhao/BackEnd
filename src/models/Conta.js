import mongoose from "mongoose";
import TiposConta from "./enums/TiposConta.js";

const contaSchema = new mongoose.Schema({
    id: { type: mongoose.Types.ObjectId },
    userId: { 
        type: mongoose.Types.ObjectId,
        ref: "usuario",
        required: true
    },
    tipo: { 
        type: String,
        enum: Object.values(TiposConta),
        required: true
    }
}, { versionKey: false });

const conta = mongoose.model("conta", contaSchema);

export default conta;