import matricula from "../models/Matricula.js";

class MatriculaController {
    static async getAll(req, res) {
        try {
            const matriculas = await matricula.find({})
            .populate("pessoaId", "nome email")
            .populate("cursoId", "nome");
            res.status(200).json(matriculas);
        } catch (error) {
            res.status(500).json({message: `Falha ao buscar matrículas - ${error.message}`});
        }
    }

    static async getById(req, res) {
        try {
            const matriculaEcontrada = await matricula.findById(req.params.id)
            .populate("pessoaId", "nome email")
            .populate("cursoId", "nome");
            res.status(200).json(matriculaEcontrada);
        } catch (error) {
            res.status(500).json({message: `Falha ao buscar matricula - ${error.message}`});
        }
    }

    static async criarMatricula(req, res) {
        try {
            const novaMatricula = await matricula.create(req.body);
            res.status(200).json(novaMatricula);
        } catch (error) {
            res.status(500).json({message: `Falha ao realizar matrícula - ${error.message}`});
        }
    }

    static async alterarMatricula(req, res) {
            try {
               const matriculaAlterada = req.body;
               const id = req.params.id;
    
               const matriculaEncontrada = await matricula.findByIdAndUpdate(id, matriculaAlterada, { new: true, runValidators: true });
               if (!matriculaEncontrada) {
                    return res.status(404).json({message: "Matricula não encontrada"});
                }
    
               res.status(200).json({message: "Matricula alterada com sucesso", matricula: matriculaEncontrada});
    
            } catch (error) {
                res.status(500).json({message: `Falha ao atualizar dados - ${error.message}`});
            }
    }

    static async deletarMatricula(req, res) {
        try {
            const matriculaEncontrada = await matricula.findByIdAndDelete(req.params.id);
            if (!matriculaEncontrada) {
                return res.status(404).json({message: "Matricula não encontrada"});
            }
            res.status(200).json({message: "Matricula deletada com sucesso."});
        } catch (error) {
            res.status(500).json({message: `Falha ao deletar matricula - ${error.message}`});
        }
    }
    
}

export default MatriculaController;