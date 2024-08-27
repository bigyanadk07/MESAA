// routes/getAdminInfo.ts
const express = require('express')
const router = express.Router()
const AdminInfo = require('../models/AdminInfoModel')

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await AdminInfo.findOne({ username, password });
        if (admin) {
            res.status(200).json({ name: admin.name });
        } else {
            res.status(400).json({ error: 'Invalid username or password' });
        }
    } catch (err) {
        res.status(500).json({ error: 'An error occurred. Please try again.' });
    }
});

module.exports = router;
