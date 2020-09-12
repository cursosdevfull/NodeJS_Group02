import express, { Application, Request, Response } from 'express';
import { DefaultRouter, UserRouter, RoleRouter, AuthRouter } from './routes';

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', DefaultRouter);
app.use('/users', UserRouter);
app.use('/roles', RoleRouter);
app.use('/auth', AuthRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send('Path not found');
});

export default app;
