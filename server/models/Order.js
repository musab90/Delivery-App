import mongoose from "mongoose";



const OrderSchema = new mongoose.Schema({
    amount: {
      type: Number,
      required: true
    },
    restaurent:{
      type: String,
      required: true
      
    },
    status:{
      type: String,
      default: 'pending'
    },
    method:{
      type: Number,
    }
}, { timestamps: true })


const Order = mongoose.model('Order', OrderSchema);

export default Order