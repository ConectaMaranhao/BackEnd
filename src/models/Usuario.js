import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuarioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    username: { type: String, required: true, trim: true },
    senha: { type: String, required: true, select: false }, // 'select: false' para não retornar a senha em queries por padrão
    // 'dataCadastro' deve ter um 'type' e um 'default' para registrar a data de criação automaticamente.
    ativo: { type: Boolean, required: true, default: true }
}, { versionKey: false });

usuarioSchema.pre('save', async function(next) {
    if (!this.isModified("senha")) return next();

    this.senha = await bcrypt.hash(this.senha, 10);
    next();
});

const usuario = mongoose.model("usuario", usuarioSchema);

export default usuario;