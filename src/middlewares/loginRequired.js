import jwt from "jsonwebtoken";
import User from "../models/User";

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ["Login required"],
    });
  }
  const [, token] = authorization.split(" ");
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    console.log(id);
    console.log(email);
    console.log("------------------");
    /*  ---- Depois de dados de usuário alterados,
    verifica se o token bate com o usuário atual(dados novos)
    se não tem que fazer login denovo para receber um novo token (id===id? email===emai?) */
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ["Usuário inválido"],
      });
    }
    //-----
    req.userId = id;
    req.userEmail = email;
    console.log(req.userId);
    console.log(req.userEmail);
    return next();
  } catch (e) {
    console.log(e); //log apenas para debug(RETIRAR)
    return res.status(401).json({
      errors: ["Token expirado ou inválido. Faça login novamente"],
    });
  }
};
