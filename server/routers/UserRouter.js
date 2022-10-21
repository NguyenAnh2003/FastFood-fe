import exrpess from 'express';
import User from '../models/UserModel';
import bcrypt from 'bcryptjs';

const userRouter = exrpess.Router();

userRouter.post('/mail', async (req, res) => {
  const email = req.body.email;
});

