import express from 'express';
import News from '../models/NewsModel.js';
import Product from '../models/ProductModel.js';

const combineRouter = express.Router();

combineRouter.get('/home', async (req, res) => {
  const PAGE_SIZE = 4;
  const page = parseInt(req.query.page || "0")
  const totalPagesHome = await Product.countDocuments({ new: true });

  // const products = await Product.find({
  //   new: true
  // }).limit(PAGE_SIZE).skip(page * PAGE_SIZE);

  const products = await Product.find({
    new: true
  });

  const news = await News.find();
  res.send({
    products,
    news,
    totalPagesHome: Math.ceil(totalPagesHome/PAGE_SIZE)
  });
});

export default combineRouter;