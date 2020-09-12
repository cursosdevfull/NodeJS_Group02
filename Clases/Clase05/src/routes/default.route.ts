import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

router.get('/health-check', (req: Request, res: Response) => {
  res.send('I am alive');
});

export default router;
