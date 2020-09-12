import express, { Router } from 'express';
import { UserRepository } from '../repositories';
import { UserController } from '../controllers';
import { AuthenticationGuard } from '../guards';
import authorizationGuard from '../guards/authorization.guard';

const router: Router = express.Router();
const userRepository: UserRepository = new UserRepository();
const userController: UserController = new UserController(userRepository);

router.get(
  '/',
  AuthenticationGuard.canActivate,
  authorizationGuard.canActivate('OPERATOR'),
  userController.getAll
);
router.get('/:id', userController.getById);
router.post('/', userController.insert);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
