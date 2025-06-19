import { pessoa } from "../models/Pessoa.js";

class PessoaController {
  static async listarPessoas(req, res) {
    try {
      const listaPessoa = await pessoa.find({});
      res.status(200).json(listaPessoa);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na requisição` });
    }
  }

  static async listarPessoaPorId(req, res) {
    try {
      const id = req.params.id;
      const pessoaEncontrada = await pessoa.findById(id);
      res.status(200).json(pessoaEncontrada);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na requisição da pessoa` });
    }
  }

  static async cadastrarPessoa(req, res) {
    try {
      const novaPessoa = await pessoa.create(req.body);
      res
        .status(201)
        .json({ message: "Criado com sucesso", pessoa: novaPessoa });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao cadastrar pessoa` });
    }
  }

  static async atualizarPessoa(req, res) {
    try {
      const id = req.params.id;
      await pessoa.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Purso atualizada" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na atualização` });
    }
  }

  static async excluirPessoa(req, res) {
    try {
      const id = req.params.id;
      await pessoa.findByIdAndDelete(id);
      res.status(200).json({ message: "Pessoa excluída com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Falha na exclusão` });
    }
  }
}

export default PessoaController;
