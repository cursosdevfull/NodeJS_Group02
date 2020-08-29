import express, { Router } from 'express';
import { RoleRepository } from '../repositories';
import { RoleController } from '../controllers';

const router: Router = express.Router();
const roleRepository: RoleRepository = new RoleRepository();
const roleController: RoleController = new RoleController(roleRepository);

router.get('/', roleController.getAll);
router.get('/:id', roleController.getById);
router.post('/', roleController.insert);
router.put('/:id', roleController.update);
router.delete('/:id', roleController.delete);

export default router;
