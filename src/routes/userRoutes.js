import { Router } from 'express';
import UserController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// isso não deveria existir em um sistema real --> retirar se usar para aplicação real
router.get('/', loginRequired, UserController.index);// lista TODOS os usuários
router.get('/:id', UserController.show);// lista UM usuário (qualquer um)

// realmente necessários:
router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
