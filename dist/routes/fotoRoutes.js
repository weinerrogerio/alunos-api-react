"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
/* import loginRequired from '../middlewares/loginRequired'; */

var _FotoController = require('../controllers/FotoController'); var _FotoController2 = _interopRequireDefault(_FotoController);

const router = new (0, _express.Router)();

/* router.get('/', loginRequired, photoController.index); */
router.get("/", _FotoController2.default.store);

exports. default = router;
