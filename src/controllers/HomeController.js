import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Duarte',
      sobrenome: 'Rogerio',
      email: 'weinerrogerio@gmail.com',
      idade: 29,
      peso: 150.5,
      altura: 168.9,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
