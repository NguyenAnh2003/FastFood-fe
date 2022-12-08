import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import WishList from '../models/WishListModel';
import { isAuth } from '../utils';
const wishlistRouter = express.Router();

wishlistRouter.get(
  '/all',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const yourWishlist = WishList.find({
      user: req.user._id,
    });
    res.send(yourWishlist);
  })
);

wishlistRouter.post(
  '/add',
  expressAsyncHandler(async (req, res) => {
    const items = new WishList({
      
    })
  })
);

wishlistRouter.delete(
  '/remove',
  expressAsyncHandler(async (req, res) => {})
);

export default wishlistRouter;
