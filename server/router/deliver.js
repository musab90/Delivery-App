import express from 'express'
import Deliver from '../models/Deliver.js'
import { verifyAuth, verifyAuthisAdmin } from './verifyToken.js'
const router = express.Router()


//create food
router.post('/create', verifyAuthisAdmin, async(req, res) => {
    
    const create = new Deliver(req.body) 

    try {
        const saveFood = await create.save() 
        res.status(200).json(saveFood)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//update food
router.put('/find/:id', verifyAuthisAdmin, async(req, res)=>{
    try {
        const updateDeliver = await Deliver.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new: true})
        res.status(200).json(updateDeliver)
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//delte food
router.delete('/find:id', verifyAuthisAdmin, async(req, res)=>{
    try {
        await Deliver.findByIdAndDelete(req.params.id)
        res.status(200).json("Deliver successfully deleted ")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//get food
router.get('/:id', verifyAuth, async(req, res)=>{
    try {
        const getDeliver = await Deliver.findById(req.params.id)
        res.status(200).json(getDeliver)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//getAll foods
router.get('/find/:id', verifyAuth, async(req, res)=>{
    try {
        const getDelivers = await Deliver.findById(req.params.id)
        res.status(200).json(getDelivers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})












export default router