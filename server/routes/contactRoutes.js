const express = require('express')
const router = express.Router()
const ContactModel = require('../models/ContactModel')

router.get('/', async (req, res) => {
    try{
        const ContactData = await ContactModel.find();
        res.json(ContactData);
    }
    catch(err){
        res.status(500).json({err: err.message})
    }
})

// Add a new route to handle form submission
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        // Create a new instance of the ContactModel
        const newContact = new ContactModel({
            name,
            email,
            message
        });
        // Save the Contact to the database
        await newContact.save();
        res.status(201).json({ message: 'Contact submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;