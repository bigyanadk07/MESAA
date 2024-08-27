const express = require('express')
const router = express.Router()
const NameModel = require('../models/NameModel')

router.get('/', async (req,res) => {
    try{
        const NameData = await NameModel.find();
        res.json(NameData);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
})

module.exports = router;