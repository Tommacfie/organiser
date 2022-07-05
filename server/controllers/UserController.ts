import { Request, Response } from 'express';

import User from '../models/User';

export const createUser = async (req: Request, res: Response) => {
  const newUser = await User.create(req.body);
  res.send(newUser).status(201);
};
