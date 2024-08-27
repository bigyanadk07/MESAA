const express = require('express')
const router = express.Router()
const DrinksModel = require('../models/DrinksModel')

router.get('/', async (req, res)=> {
    try{
        const DrinksData = await DrinksModel.find();
        res.json(DrinksData)
    }
    catch(err){
        res.status(500).json({err: message.err});
}
})

module.exports = router;