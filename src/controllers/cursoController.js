import { curso } from "../models/Curso.js";

class CursoController {
  static async listarCursos(req, res) {
    try {
      const listaCurso = await curso.find({});
      res.status(200).json(listaCurso);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na requisição` });
    }
  }

  static async listarCursoPorId(req, res) {
    try {
      const id = req.params.id;
      const cursoEncontrado = await curso.findById(id);
      res.status(200).json(cursoEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na requisição do curso` });
    }
  }

  static async cadastrarCurso(req, res) {
    try {
      const novoCurso = await curso.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", curso: novoCurso });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao cadastrar curso` });
    }
  }

  static async atualizarCurso(req, res) {
    try {
      const id = req.params.id;
      await curso.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Curso atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na atualização` });
    }
  }

  static async excluirCurso(req, res) {
    try {
      const id = req.params.id;
      await curso.findByIdAndDelete(id);
      res.status(200).json({ message: "Curso excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Falha na exclusão` });
    }
  }
}

export default CursoController;
