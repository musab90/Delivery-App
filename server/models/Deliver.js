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
        type: String,
    },
    driverRequest:[
        {
            customerId:{
                type:String,
                required: true
            },
            location:{
                type: [String],
                
            },
        },
    ],
    method:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        default: 'pending'
    },
}, { timestamps: true })


const Deliver = mongoose.model('Deliver', DeliverSchema);

export default Deliver