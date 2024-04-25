import { Router } from 'express';
/* import loginRequired from '../middlewares/loginRequired'; */

import fotoController from '../controllers/FotoController';

const router = new Router();

/* router.get('/', loginRequired, photoController.index); */
router.get('/', fotoController.store);

export default router;
