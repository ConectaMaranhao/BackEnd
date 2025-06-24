import usuario from "../models/Usuario.js";

class AuthController {
    static async registrar(req, res) {
        try {
            const {username, senha} = req.body;
            const existantUser = await usuario.findOne({username: username}).exec();
            if (existantUser) {
                return res.status(400).json({message: "Já existe um usuário com esse nome"});
            }

            const novoUsuario = await usuario.create({username, senha});
            
            res.status(201).json({
                message: "Usuário cadastrado com sucesso",
                usuario: {
                    id: novoUsuario._id,
                    username: novoUsuario.username,
                    senha: novoUsuario.senha
                }
            });

        } catch (error) {
            res.status(500).json({message: `Erro ao cadastrar usuário - ${error.message}`});
        }
    }
}


export default AuthController;