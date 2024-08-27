const express = require('express')
const router = express.Router()
const BurritosModel = require('../models/BurritosModel')

router.get('/', async (req, res)=> {
    try{
        const BurritosData = await BurritosModel.find();
        res.json(BurritosData)
    }
    catch(err){
        res.status(500).json({err: message.err});
}
})

module.exports = router;