import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import News from '../models/NewsModel.js';


const newsRouter = express.Router();

newsRouter.get('/', expressAsyncHandler(async(req, res) => {
  const posts = await News.find();
  res.send(posts);
}));



export default newsRouter;