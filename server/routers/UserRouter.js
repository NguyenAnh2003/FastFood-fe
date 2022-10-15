import exrpess from 'express';

const userRouter = exrpess.Router();

userRouter.post('/mail', async (req, res) => {
  const email = req.body.email;
});


