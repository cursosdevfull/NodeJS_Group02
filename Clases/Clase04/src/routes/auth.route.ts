import express, { Router } from 'express';
import { UserRepository } from '../repositories';
import { AuthController } from '../controllers';

const router: Router = express.Router();
const userRepository: UserRepository = new UserRepository();
const userController: AuthController = new AuthController(userRepository);

router.post('/login', userController.login);

export default router;
