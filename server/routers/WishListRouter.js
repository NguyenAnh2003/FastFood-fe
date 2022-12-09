import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import WishList from '../models/WishListModel.js';
import { isAuth } from '../utils.js';
const wishlistRouter = express.Router();

wishlistRouter.get(
  '/',
  // isAuth,
  expressAsyncHandler(async (req, res) => {
    const yourWishlist = WishList.find({
      user: req.user._id,
    });
    if (yourWishlist) {
      res.send(yourWishlist);
    } else {
      res.send();
    }
  })
);

wishlistRouter.post(
  '/add',
  expressAsyncHandler(async (req, res) => {
    const items = new WishList({
      items: req.body.item,
      user: req.body.user,
    });
    const saveitem = items.save();
    res.status(201).send({ message: 'Success', saveitem });
    // const wishList = await
  })
);

wishlistRouter.delete(
  '/remove',
  expressAsyncHandler(async (req, res) => {})
);

export default wishlistRouter;
