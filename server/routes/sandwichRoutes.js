const express = require('express')
const router = express.Router()
const SandwichModel = require('../models/SandwichModel')

router.get('/',async (req,res) =>{
    try{
        const Sandwich = await SandwichModel.find()
        res.json(Sandwich)
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

module.exports = router;