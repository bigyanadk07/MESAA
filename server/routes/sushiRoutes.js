const express = require('express')
const router = express.Router()
const SushiModel = require('../models/SushiModel')

router.get('/', async (req, res) => {
    try{
        const SushiData = await SushiModel.find();
        res.json(SushiData);
    }
    catch(err){
        res.status(500).json({err: err.message});
    }
})

module.exports = router;