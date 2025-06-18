import conta from "../models/Conta.js";

class ContaController {

    static async getAll(req, res) {
        try {
            const contas = await conta.find({});
            res.status(200).json(contas).populate("userId", "username ativo");
        } catch (error) {
            res.status(500).json({message: `Erro ao buscar contas - ${error.message}`});
        }
    }

    static async getById(req, res) {
        try {
            const contaEncontrada = await conta.findById(req.params.id).populate("userId", "username ativo");
            if (!contaEncontrada) {
                return res.status(404).json({message: "Conta não encontrada"});
            }
            res.status(200).json(contaEncontrada);
        } catch (error) {
            res.status(500).json({message: `Erro ao procurar conta - ${error.message}`});
        }
    }

    static async criarConta(req, res) {
        try {
            const novaConta = await conta.create(req.body).populate("userId", "username ativo");
            res.status(200).json({message: "Conta criada com sucesso", conta: novaConta});
        } catch (error) {
            res.status(500).json({message: `Erro ao registrar conta - ${error.message}`});
        }
    }

    static async atualizarConta(req, res) {
        try {
            const contaAtualizada = await conta.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            ).populate("userId", "username ativo");

            if (!contaAtualizada) {
                return res.status(404).json({message: "Conta não encontrada"});
            }
            res.status(200).json({message: "Dados da conta atualizados com sucesso", conta: contaAtualizada});

        } catch (error) {
            res.status(500).json({message: `Erro ao atualizar dados da conta - ${error.message}`});
        }
    }

    static async deletarConta(req, res) {
        try {
            const contaEncontrada = await conta.findByIdAndDelete(req.params.id);
            if (!contaEncontrada) {
                return res.status(404).json({message: "Conta não encontrada"});
            }
            res.status(200).json({message: "Conta deletada com sucesso"});
        } catch (error) {
            res.status(500).json({message: `Erro ao deletar conta - ${error.message}`});
        }
    }
}

export default ContaController;