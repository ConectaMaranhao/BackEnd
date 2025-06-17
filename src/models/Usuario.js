import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    username: { type: String, required: true, trim: true },
    senha: { type: String, required: true, select: false }, // 'select: false' para não retornar a senha em queries por padrão
    // 'dataCadastro' deve ter um 'type' e um 'default' para registrar a data de criação automaticamente.
    ativo: { type: Boolean, required: true }
}, { versionKey: false });

const usuario = mongoose.model("usuario", usuarioSchema);

export default usuario;