import usuario from "../models/Usuario.js";

class UsuarioController {
    static async getAll(req, res) {
        try {
            const usuarios = await usuario.find({});
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha na requisição.`});
        } 
    }

    static async getById(req, res) {
        try {
            const usuarioEcontrado = await usuario.findById(req.params.id);
            res.status(200).json(usuarioEcontrado);
        } catch (error) {
            res.status(500).json({message: `Falha ao buscar usuário - ${error.message}`});
        }
    }

    static async criarUsuario(req, res) {
        try {
            const newUser = await usuario.create(req.body);
            res.status(201).json({message: "Usuário criado com sucesso.", user: newUser});
        } catch (error) {
            res.status(500).json({message: `Erro ao criar usuário - ${error.message}`});
        }
    }

    static async editarUsuario(req, res) {
        try {
           const usuarioAlterado = req.body;
           const id = req.params.id;

           const usuarioEncontrado = await usuario.findByIdAndUpdate(id, usuarioAlterado, { new: true, runValidators: true });
           if (!usuarioEncontrado) {
                return res.status(404).json({message: "Usuário não encontrado"});
            }

           res.status(200).json({message: "Dados do usuário alterados com sucesso", usuario: usuarioEncontrado});

        } catch (error) {
            res.status(500).json({message: `Falha ao atualizar dados do usuário - ${error.message}`});
        }
    }

    static async deletarUsuario(req, res) {
        try {
            const usuarioEncontrado = await usuario.findByIdAndDelete(req.params.id);
            if (!usuarioEncontrado) {
                return res.status(404).json({message: "Usuário não encontrado"});
            }
            res.status(200).json({message: "Usuário deletado com sucesso."});
        } catch (error) {
            res.status(500).json({message: `Falha ao deletar usuário - ${error.message}`});
        }
    }
}

export default UsuarioController;