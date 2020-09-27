import express, { Application, Request, Response } from 'express';
import { PhotoController, UserController } from './controllers';
import { ControllerRoute } from './interfaces';
import { PhotoRepository, UserRepository } from './repositories';
import { attachRoutes } from './utils';

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./public'));

const controllers: ControllerRoute[] = [
  { class: UserController, dependencies: [UserRepository] },
  { class: PhotoController, dependencies: [PhotoRepository] },
];

attachRoutes(app, controllers);

app.use((req: Request, res: Response) => {
  res.status(404).send('Path not found');
});

export default app;
