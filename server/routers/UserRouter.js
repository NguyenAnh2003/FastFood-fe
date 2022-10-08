import exrpess from 'express';

const userRouter = exrpess.Router();

userRouter.post('/mailing', async (req, res) => {
  const email = req.body.email;
});


