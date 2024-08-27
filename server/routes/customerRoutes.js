const express = require('express')
const router = express.Router()
const CustomerModel = require('../models/CustomerModel')

router.get('/', async (req, res) => {
    try{
        const CustomerData = await CustomerModel.find();
        res.json(CustomerData);
    }
    catch(err){
        res.status(500).json({err: err.message})
    }
})

module.exports = router;