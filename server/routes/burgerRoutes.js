//CHahine module haru import garne
const express = require('express');
const router = express.Router();
const Burger = require('../models/BurgerModel');

// Burger collection ko sabai data fetch garna lai yo get function fire garinxa
router.get('/', async (req, res) => {
    try {
        // Yo chai hamro NoSQL command Burger collection lai .find() garera tesko data burgers bhanne contant ma store garne 
        const Burgers = await Burger.find();

        // Mathi burgers ma hamile store gareko Burger collection bata aayeko data fronend ko api endpoint ma pathaidine in JSON format
        res.json(Burgers);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

module.exports = router;
    