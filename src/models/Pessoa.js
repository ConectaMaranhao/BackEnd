import mongoose from "mongoose";

const pessoaSchema = new mongoose.Schema(
  {
    contaId: {
      type: mongoose.Types.ObjectId,
      ref: "conta", // Referencia a outra coleção 'conta'
      required: true,
      index: true, // Adiciona um índice para consultas mais rápidas
    },
    nome: {
      type: String,
      required: [true, "O nome é obrigatório."],
      trim: true, // Remove espaços em branco do início e fim
      minlength: [3, "O nome deve ter pelo menos 3 caracteres."],
    },
    dataNascimento: {
      type: Date,
      validate: {
        validator: function (v) {
          return v instanceof Date && !isNaN(v);
        },
        message: (props) =>
          `${props.value} não é uma data de nascimento válida!`,
      },
    },
    telefone: {
      type: String,
      trim: true,
      // Expressão regular para validar formato de telefone (ex: 5511987654321, ou +55 (11) 98765-4321)
      validate: {
        validator: function (v) {
          return /^\+?\d{2,3}[-\s]?\(?\d{2}\)?[-\s]?\d{4,5}[-\s]?\d{4}$/.test(
            v
          );
        },
        message: (props) =>
          `${props.value} não é um número de telefone válido!`,
      },
      sparse: true, // Permite que o campo seja opcional e único apenas se presente
    },
    cpf: {
      type: String,
      required: [true, "O CPF é obrigatório."],
      unique: true, // Garante que o CPF seja único
      trim: true,
      // Expressão regular para CPF no formato 000.000.000-00
      validate: {
        validator: function (v) {
          return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v);
        },
        message: (props) => `${props.value} não é um CPF válido!`,
      },
    },
    email: {
      type: String,
      required: [true, "O e-mail é obrigatório."],
      unique: true, // Garante que o e-mail seja único
      lowercase: true, // Converte para minúsculas antes de salvar
      trim: true,
      // Expressão regular para validação básica de e-mail
      validate: {
        validator: function (v) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (props) => `${props.value} não é um e-mail válido!`,
      },
    },
    bio: {
      type: String,
      trim: true,
      maxlength: [500, "A biografia não pode exceder 500 caracteres."],
    },
    links: [
      // Array de objetos para links mais estruturados
      {
        url: {
          type: String,
          trim: true,
          validate: {
            validator: function (v) {
              return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v); // Validação de URL
            },
            message: (props) => `${props.value} não é uma URL válida!`,
          },
        },
        type: {
          // Tipo do link (ex: github, linkedin, website)
          type: String,
          enum: ["github", "linkedin", "website", "portfolio", "other"],
          lowercase: true,
        },
      },
    ],
    xp: {
      type: Number,
      default: 0,
      min: [0, "A XP não pode ser negativa."],
      max: [9999999, "Valor de XP muito alto."], // Exemplo de limite máximo
    },
    conquistas: {
      type: [String],
      set: (v) => (Array.isArray(v) ? v.map((item) => item.trim()) : []), // Remove espaços em branco
      default: [],
    },
  },
  {
    timestamps: true, // Adiciona `createdAt` e `updatedAt` automaticamente
    versionKey: false, // Remove o campo `__v`
  }
);

const pessoa = mongoose.model("pessoas", pessoaSchema);

export { pessoa, pessoaSchema };
