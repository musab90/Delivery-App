import express from 'express'
import CryptoJS from 'crypto-js'
import JWT from 'jsonwebtoken'
import User from '../models/User.js'
const router = express.Router()




//register
router.post('/register', async (req,res)=>{
    
    const users = new User({
        username: req.body.username,
        email:req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTOJS).toString(),
    })

    try {
        const saveUser = await users.save()
        res.status(200).json(saveUser)

    } catch (error) {
        res.status(500).json({message: error.message})
    }


})


//login

router.post('/login', async (req,res)=>{
    
    try {
        const user = await User.findOne({ email:req.body.email })

        if(!user) return res.status(404).json({message: 'User not found'})

        const hash = CryptoJS.AES.decrypt(user.password, process.env.CRYPTOJS)

        const encrypPassword = hash.toString(CryptoJS.enc.Utf8)

        if(!encrypPassword) return res.status(401).json({message: 'Password is incorrect'})

        const accessToken = JWT.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
            process.env.JWT_TOKEN,
            {expiresIn:"3d"}
        )

        const { password,isAdmin, ...others } = await user._doc

        res.cookie("access_token", accessToken, {
            httpOnly: true,
          }).status(200).json({...others, isAdmin})

    } catch (error) {
        res.status(500).json({message: error.message})
    }


})










export default router