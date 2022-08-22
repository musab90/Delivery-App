import express from 'express'
const router = express.Router()
import Order from '../models/Order.js'
import { verifyAuth, verifyAuthisAdmin, verifyToken } from './verifyToken.js'


//create order
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
  
    try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
});

//update order
router.put("/find/:id", verifyAuthisAdmin, async (req, res) => {
    
    try {
      const savedOrder = await Order.findByIdAndUpdate(req.params.id,{
        $set: req.body
      }, {new: true});
      res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});
//delete order

router.delete("/:id", verifyAuthisAdmin, async (req, res) => {
    
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("order successfully deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});
//get order
router.get("/find/:id", verifyAuthisAdmin, async (req, res) => {
    
    try {
      const getOrder = await Order.findByIdAndUpdate(req.params.id);
      res.status(200).json(getOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});
//get all orders
router.put("/", verifyAuthisAdmin, async (req, res) => {
    
    try {
      const getOrders = await Order.find();
      res.status(200).json(getOrders);
    } catch (err) {
        res.status(500).json(err);
    }
});












export default router