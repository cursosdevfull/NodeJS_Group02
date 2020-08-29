import express, { Router } from 'express';
import { UserRepository } from '../repositories';
import { UserController } from '../controllers';

const router: Router = express.Router();
const userRepository: UserRepository = new UserRepository();
const userController: UserController = new UserController(userRepository);

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userController.insert);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
