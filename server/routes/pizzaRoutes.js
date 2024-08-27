const express = require('express')
const router = express.Router()
const Pizza = require('../models/PizzaModel')

router.get('/',async (req,res) =>{
    try{
        const Pizzas = await Pizza.find()
        res.json(Pizzas)
    } catch(err) {
        console.log('Error fetching pizza data:', err)
        res.status(500).json({message: err.message});
    }
})

module.exports = router;