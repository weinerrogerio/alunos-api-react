import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();

import "./database";

import express from "express";
import cors from "cors";
import helmet from "helmet";

import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import alunoRoutes from "./routes/alunoRoutes";
import fotoRoutes from "./routes/fotoRoutes";

const whiteList = [
  "https://192.168.1.59:3001",
  "https://localhost/3001",
  "https://192.168.56.1:3001",
  "https://192.168.1.173:3001",
  "https://192.168.1.166:3001",
  "https://localhost/3000",
  "https://192.168.56.1:3000",
  "https://192.168.1.173:3000",
  "https://192.168.1.166:3000",

  "http://localhost/3001",
  "http://192.168.56.1:3001",
  "http://192.168.1.173:3001",
  "http://192.168.1.166:3001",
  "http://localhost/3000",
  "http://192.168.56.1:3000",
  "http://192.168.1.173:3000",
  "http://192.168.1.166:3000",
]; //remover localhost no deploy
const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by cors"));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    //this.app.use(cors()); //ALERTA: PASSANDOA CESSO A TODOS OS DOMINIOS (VER EXPRESS CORS)
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(
      "/images/",
      express.static(resolve(__dirname, "..", "uploads", "images"))
    );
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
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
