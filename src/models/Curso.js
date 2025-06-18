import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
      unique: true, // É provável que o nome do curso seja único
    },
    area: {
      type: [String], // Usar um array de Strings para permitir múltiplas áreas
      required: true,
      trim: true,
    },
    descricao: {
      type: String,
      trim: true,
    },
    modalidade: {
      type: String,
      required: true,
      enum: ["online", "híbrido", "presencial"], // Define as opções permitidas
      trim: true,
    },
    cargaHoraria: {
      type: String, // Mantido como String para flexibilidade (ex: "40 horas", "2 meses")
      required: true,
      trim: true,
    },
    requisitos: {
      type: [String], // Array de Strings para listar múltiplos requisitos
      default: [], // Define um array vazio como padrão se nenhum requisito for fornecido
      trim: true,
    },
    status: {
      type: String,
      enum: ["ativo", "inativo", "em breve", "concluído"], // Exemplos de status
      default: "ativo", // Status padrão para um novo curso
      trim: true,
    },
  },
  {
    timestamps: true, // Adiciona 'createdAt' e 'updatedAt' automaticamente
    versionKey: false, // Remove o campo '__v' dos documentos
  }
);

const curso = mongoose.model("cursos", cursoSchema);

export { curso, cursoSchema };
