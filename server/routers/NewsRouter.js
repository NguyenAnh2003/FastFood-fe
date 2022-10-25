import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import News from '../models/NewsModel.js';


const newsRouter = express.Router();

newsRouter.get('/', expressAsyncHandler(async(req, res) => {
  const posts = await News.find();
  res.send(posts);
}));

newsRouter.get('/:id', expressAsyncHandler(async(req, res)=> {
  const post = await News.findById(req.params.id);
  if(post) {
    res.send(post)
  }
  else {
    res.status(404).send({message: 'Post not found'})
  }
}));

export default newsRouter;