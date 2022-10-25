import exrpess from 'express';

const userRouter = exrpess.Router();


userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          address: user.address,
          token: generateToken(user)
        })
        return;
      }
    }
    res.status(401).send({ message: 'User not found' });
  }))

userRouter.post('/signup', expressAsyncHandler(async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    name: req.body.name,
    address: req.body.address,
  })
  const user = await newUser.save()
  res.send({
    _id: user._id,
    name: user.name,
    address: user.address,
    email: user.email,
    token: generateToken(user)
  })
}))

