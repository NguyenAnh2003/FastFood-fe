import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import WishList from '../models/WishListModel.js';
import { isAuth } from '../utils.js';
const wishlistRouter = express.Router();

wishlistRouter.get('/');

wishlistRouter.post(
  '/create',
  // isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const newItem = new WishList({
        item: req.body.item,
        productId: req.body.item._id,
        user: req.body.user,
      });
      const newWishItem = newItem.save();
      res
        .status(201)
        .send({ message: 'Success', newWishItem });
      // const ob = {
      //   item: req.body.item,
      //   user: req.body.user,
      // };
      // console.log(ob);
    } catch (error) {
      console.log(error);
    }
  })
);

wishlistRouter.delete(
  '/remove',
  expressAsyncHandler(async (req, res) => {
    try {
      const itemFounded = await WishList.find({
        user: req.body.user,
        // productId: req.body.item._id,
      });
      // const item = req.body.item;
      // const user = req.body.user;
      // await WishList.deleteOne({ item, user });
      if (itemFounded) {
        console.log(itemFounded);
        res.status(201).send({ message: 'OK' });
      } else {
        res
          .status(404)
          .send({ message: 'Product not founded' });
      }
    } catch (error) {
      console.log(error);
    }
  })
);

export default wishlistRouter;
