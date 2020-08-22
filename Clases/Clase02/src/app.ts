import express, { Application, Request, Response } from 'express';
import { DefaultRouter, UserRouter } from './routes';

const app: Application = express();

app.use('/', DefaultRouter);
app.use('/users', UserRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send('Path not found');
});

export default app;
