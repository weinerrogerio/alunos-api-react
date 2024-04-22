/* import Aluno from '../models/Aluno'; */

class HomeController {
  async index(req, res) {
    res.json('ok home index');
  }
}

export default new HomeController();
