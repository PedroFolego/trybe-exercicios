import { NextFunction, Request, Response } from 'express';

interface IService {
  get(): Promise<[]>
}

export default class Controller {
  constructor(private service: IService) {
    this.service = service;
  }

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const plants = await this.service.get();
      return res.status(200).json(plants);
    } catch (error) {
      next(error);   
    }
  }
}