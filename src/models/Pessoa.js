import mongoose from "mongoose";

const pessoaSchema = new mongoose.Schema(
  {
    contaId: {
      type: mongoose.Types.ObjectId,
      ref: "conta",
      required: true,
    },
    nome: { type: String, required: true },
    dataNascimento: { type: Date },
    telefone: { type: String },
    cpf: { type: String, required: true },
    email: { type: String, required: true },
    bio: { type: String },
    links: { type: [String] },
    xp: { type: Number, default: 0, min: 0 },
    conquistas: { type: [String] },
  },
  { versionKey: false }
);

const pessoa = mongoose.model("pessoas", pessoaSchema);

export { pessoa, pessoaSchema };
