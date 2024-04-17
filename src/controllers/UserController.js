import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      await user.destroy(req.body);
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();

/*
POR PADRÃO PODEMOS TER APENAS ATE 5 METODOS EM UM CONTROLLER
index --> lista todos os usuários/mostra algo --> GET
store/crete --> cria um novo usuário (nesse caso é usuário) --> POST
delete --> apaga algo --> DELETE
show --> mostra um usuário --> GET
update --> atualiza --> PATH OU PUT
*/
