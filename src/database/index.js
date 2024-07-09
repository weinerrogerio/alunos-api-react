import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Aluno from "../models/Aluno";
import User from "../models/User";

import Foto from "../models/Foto";

const models = [Aluno, User, Foto];
const con = new Sequelize(databaseConfig);
models.forEach((model) => model.init(con));
models.forEach((model) => model.associate && model.associate(con.models));
