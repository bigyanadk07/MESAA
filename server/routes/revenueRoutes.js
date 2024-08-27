const express = require('express')
const router = express.Router()
const RevenueModel = require('../models/RevenueModel')

router.get('/', async (req,res)=> {
    try{
        const RevenueData = await RevenueModel.find();
        res.json(RevenueData);
    }
    catch(err){
        res.status(500).json({err: err.message})
    }
})

module.exports = router;