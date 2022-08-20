import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: Number
    },
    status:{
        type: [String],
        default: ''
    },
    userStatus:{
        type: [String],
        default: ''
    },
    isAdmin:{
        type: Boolean,
        default: false
    }

}, { timestamps: true })


const User = mongoose.model('User', userSchema);

export default User