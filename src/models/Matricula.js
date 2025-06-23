import mongoose from "mongoose";

const matriculaSchema = new mongoose.Schema({
    pessoaId: { 
        type: mongoose.Types.ObjectId,
        ref: "pessoas",
        required: true
    },
    cursoId: {
        type: mongoose.Types.ObjectId,
        ref: "cursos",
        required: true
    },
    dataMatricula: {
        type: Date,
        default: Date.now,
        required: true
    },
    status: {
        type: String,
        enum: ["ativa", "cancelada"],
        default: "ativa",
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

const matricula = mongoose.model("matricula", matriculaSchema);

export default matricula;