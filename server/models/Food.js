import mongoose from "mongoose";



const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    restaurent: {
        type: String,
        required: true,   
    },
    foodCategory: {
       type: Array,
       required: true, 
    }
}, { timestamps: true })


const Food = mongoose.model('Food', FoodSchema);

export default Food