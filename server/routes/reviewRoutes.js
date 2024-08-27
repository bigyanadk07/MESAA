const express = require('express')
const router = express.Router()
const ReviewModel = require('../models/ReviewModel')

router.get('/', async (req, res) => {
    try{
        const ReviewData = await ReviewModel.find();
        res.json(ReviewData);
    }
    catch(err){
        res.status(500).json({err: err.message})
    }
})

// Add a new route to handle form submission
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        // Create a new instance of the ReviewModel
        const newReview = new ReviewModel({
            name,
            message
        });
        // Save the review to the database
        await newReview.save();
        res.status(201).json({ message: 'Review submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;