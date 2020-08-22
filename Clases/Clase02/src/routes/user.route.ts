import express, { Router, Request, Response } from 'express';
import { UserController } from '../controllers';
import { UserRepository } from '../repositories';

const router: Router = express.Router();
const userRepository: UserRepository = new UserRepository();
const userController: UserController = new UserController(userRepository);

router.get('/', userController.getAll);
router.get('/admin', userController.getAllAdmins);

router.get('/other-way', (req: Request, res: Response) => {
  userController.getAll(req, res);
});

export default router;
