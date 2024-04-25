import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import fotoRoutes from './src/routes/fotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}
// exportando apenas o express (app)
export default new App().app;

/*
POR PADRÃO PODEMOS TER APENAS ATE 5 METODOS EM UM CONTROLLER
index --> lista todos os usuários/mostra algo --> GET
store/crete --> cria um novo usuário (nesse caso é usuário) --> POST
delete --> apaga algo --> DELETE
show --> mostra um usuário --> GET
update --> atualiza --> PATH OU PUT
*/
