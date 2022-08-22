import mongoose from "mongoose";



const DeliverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    driverPurchase:{
        type: Number,
        required: true
    },
    driverstat:{
        type: [String],
        default: ''
    },
    driverRequest:{
        type: [String]
    },
    method:{
        type: Number,
        required: true
    },
    status:{
        type: Array,
        default: 'pending'
    },
}, { timestamps: true })


const Deliver = mongoose.model('Deliver', DeliverSchema);

export default Deliver