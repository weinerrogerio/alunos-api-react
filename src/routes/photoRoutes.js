import { Router } from 'express';

import photoController from '../controllers/PhotoController';

const router = new Router();

router.get('/', photoController.index);

export default router;
