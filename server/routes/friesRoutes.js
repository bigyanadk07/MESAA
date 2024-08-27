const express = require('express')
const router = express.Router()
const FriesModel = require('../models/FriesModel')

router.get('/', async(req,res)=>{
    try{
        const FriesData = await FriesModel.find();
        res.json(FriesData);
    }
    catch(err){
        res.status(500).json({err: err.message})
    }
})

module.exports = router;