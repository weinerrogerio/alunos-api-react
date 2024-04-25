"use strict";Object.defineProperty(exports, "__esModule", {value: true});/* import Aluno from '../models/Aluno'; */

class HomeController {
  async index(req, res) {
    res.json('ok home index');
  }
}

exports. default = new HomeController();
