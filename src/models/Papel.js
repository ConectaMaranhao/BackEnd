import mongoose from "mongoose";

const papelSchema = new mongoose.Schema({
    id: { type: mongoose.Types.ObjectId },
    nome: { type: String }
}, { versionKey: false });

const papel = mongoose.model("papel", papelSchema);

export default papel;