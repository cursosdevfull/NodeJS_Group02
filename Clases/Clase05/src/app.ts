import express, { Application, Request, Response } from 'express';
import { AuthController, RoleController, UserController } from './controllers';
import { ControllerRoute } from './interfaces';
import { RoleRepository, UserRepository } from './repositories';
import { attachRoutes } from './utils';

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const controllers: ControllerRoute[] = [
  { class: AuthController, dependencies: [UserRepository] },
  { class: RoleController, dependencies: [RoleRepository] },
  { class: UserController, dependencies: [UserRepository] },
];

attachRoutes(app, controllers);

app.use((req: Request, res: Response) => {
  res.status(404).send('Path not found');
});

export default app;
