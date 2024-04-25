"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }
  const [, token] = authorization.split(' ');
  try {
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    console.log(id);
    console.log(email);
    console.log('------------------');
    /*  ---- Depois de dados de usuário alterados,
    verifica se o token bate com o usuário atual(dados novos)
    se não tem que fazer login denovo para receber um novo token (id===id? email===emai?) */
    const user = await _User2.default.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }
    //-----
    req.userId = id;
    req.userEmail = email;
    console.log(req.userId);
    console.log(req.userEmail);
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido. Faça login novamente'],
    });
  }
};
