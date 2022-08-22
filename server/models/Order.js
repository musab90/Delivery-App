import mongoose from "mongoose";



const OrderSchema = new mongoose.Schema({
    amount: {
      type: Number,
      required: true
    },
    restaurent:{
      type:mongoose.Schema.Types.String,
      ref: 'Food'
      
    },
    status:{
      type: Array,
      default: 'pending'
    },
    method:{
      type: Number,
    }
}, { timestamps: true })


const Order = mongoose.model('Order', OrderSchema);

export default Order