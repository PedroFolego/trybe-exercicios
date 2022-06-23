import express, { NextFunction, Request, Response } from 'express';
import Controller from './Controller';

const app = express();

app.get('/plants', async (req: Request, res: Response, next: NextFunction) => {
  await Controller().get(req, res, next);
});

app.listen(3000, () => console.log('port 3000'));