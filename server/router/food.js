import express from 'express'
import Food from '../models/Food.js'
import { verifyAuth, verifyAuthisAdmin } from './verifyToken.js'
const router = express.Router()


//create food
router.post('/create', verifyAuthisAdmin, async(req, res) => {
    
    try {
        
        const create = new Food({ 
            name: req.body.name, 
            restaurent: req.body.restaurent, 
            foodCategory: req.body.foodCategory 
        }) 
        const saveFood = await create.save() 
        res.status(200).json(saveFood)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//update food
router.put('/find/:id', verifyAuthisAdmin, async(req, res)=>{
    try {
        const updateFood = await Food.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new: true})
        res.status(200).json(updateFood)
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//delte food
router.delete('/:id', verifyAuthisAdmin, async(req, res)=>{
    try {
        await Food.findByIdAndDelete(req.params.id)
        res.status(200).json("Food successfully deleted ")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//get food
router.get('/:id', verifyAuth, async(req, res)=>{
    try {
        const getFood = await Food.findById(req.params.id)
        res.status(200).json(getFood)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//getAll foods
router.get('/dind/:id', verifyAuth, async(req, res)=>{
    try {
        const getFoods = await Food.findById(req.params.id)
        res.status(200).json(getFoods)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})












export default router