import mongoose from "mongoose";

const empresaSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    contaId: { 
      type: mongoose.Types.ObjectId,
      ref: "conta",
      required: true
    },
    nome: { type: String, required: true, trim: true }, // Adicionado trim para remover espaços em branco
    cnpj: {
      type: String,
      required: true,
      unique: true, // CNPJ deve ser único para cada empresa
      trim: true,
      match: [
        /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
        "Por favor, insira um CNPJ válido no formato XX.XXX.XXX/YYYY-ZZ.",
      ],
    },
    cidade: { type: String, required: true, trim: true },
    estado: { type: String, required: true, trim: true },
    setor: { type: String, required: true, trim: true },
    descricao: { type: String, trim: true },
    cursosOfertados: [{ type: String, trim: true }],
    email: {
      type: String,
      required: true,
      unique: true, // Email deve ser único
      lowercase: true, // Armazenar emails em minúsculas para consistência
      trim: true,
      // Validação básica de email
      match: [/^\S+@\S+\.\S+$/, "Por favor, use um endereço de email válido."],
    },
    dataCadastro: { type: Date, default: Date.now },
  },
  {
    timestamps: true, // Adiciona 'createdAt' e 'updatedAt' automaticamente
    versionKey: false, // Mantém o versionKey como solicitado
  }
);

const empresa = mongoose.model("empresas", empresaSchema);

export { empresa, empresaSchema };
