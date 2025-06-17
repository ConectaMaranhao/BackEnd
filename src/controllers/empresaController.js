import { empresa } from "../models/Empresa.js";

class EmpresaController {
  static async listarEmpresas(req, res) {
    try {
      const listaEmpresas = await empresa.find({});
      res.status(200).json(listaEmpresas);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarEmpresaPorId(req, res) {
    try {
      const id = req.params.id;
      const empresaEncontrada = await empresa.findById(id);
      res.status(200).json(empresaEncontrada);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição da empresa` });
    }
  }

  static async cadastrarEmpresa(req, res) {
    try {
      const novaEmpresa = await empresa.create(req.body);
      res
        .status(201)
        .json({ message: "criada com sucesso", empresa: novaEmpresa });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar empresa` });
    }
  }

  static async atualizarEmpresa(req, res) {
    try {
      const id = req.params.id;
      await empresa.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "empresa atualizada" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização` });
    }
  }

  static async excluirEmpresa(req, res) {
    try {
      const id = req.params.id;
      await empresa.findByIdAndDelete(id);
      res.status(200).json({ message: "empresa excluída com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  }
}

export default EmpresaController;
