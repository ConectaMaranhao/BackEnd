import usuario from "../models/Usuario.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class AuthController {
    static async registrar(req, res) {
        try {
            const {username, senha} = req.body;
            
            if (!username || !senha) {
                return res.status(400).json({ message: "Preencha todos os campos." });
            }

            const existantUser = await usuario.findOne({username: username}).exec();
            if (existantUser) {
                return res.status(400).json({message: "Já existe um usuário com esse nome"});
            }

            const novoUsuario = await usuario.create({username, senha});
            
            res.status(201).json({
                message: "Usuário cadastrado com sucesso",
                usuario: {
                    id: novoUsuario._id,
                    username: novoUsuario.username
                }
            });

        } catch (error) {
            res.status(500).json({message: `Erro ao cadastrar usuário - ${error.message}`});
        }
    }

    static async login(req, res) {
        try {
            const JWT_SECRET = process.env.JWT_SECRET;
            const {username, senha} = req.body;

            if (!username || !senha) {
                return res.status(400).json({ message: "Preencha todos os campos." });
            }


            const usuarioEcontrado = await usuario.findOne({username: username}).select("+senha").exec();
            if (!usuarioEcontrado) {
                return res.status(401).json({message: "Usuário não encontrado."});
            }
            
            const isPasswordCorrect = await bcrypt.compare(senha, usuarioEcontrado.senha);
            if (!isPasswordCorrect) {
                return res.status(401).json({message: "Senha incorreta."});
            }

            const token = jwt.sign(
                {id: usuarioEcontrado._id},
                JWT_SECRET,
                {expiresIn: "10m"}
            );

            return res.status(200).json({
                message: "Login realizado com sucesso.",
                token
            });
        } catch (error) {
            res.status(500).json({message: `Erro ao fazer login - ${error.message}`});  
        }
    }
}

export default AuthController;