import express from 'express'
import User from '../models/User.js'
import CryptoJS from 'crypto-js'
import { verifyAuth, verifyToken } from './verifyTOken.js'
const router = express.Router()


//update
router.put('/:id', verifyAuth, async (req, res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.CRYPTOJS
        ).toString();
    }
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new: true});
        const {password, ...others} = updateUser._doc
        res.status(200).json(others);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
//delete
router.delete('/find/:id', verifyAuth, async (req, res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        
        res.status(200).json("User has been deleted");

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
//getAuser
router.get('/find/:id', verifyAuth, async (req, res)=>{
    try {
        const getUser = await User.findById(req.params.id);
        
        res.status(200).json(getUser);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
//getAllUsers
router.get('/', verifyAuth, async (req, res)=>{
    try {
        const getUser = await User.find();
        
        res.status(200).json(getUser);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

















export default router