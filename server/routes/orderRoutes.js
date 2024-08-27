const express = require('express');
const router = express.Router();
const OrderModel = require('../models/OrderModel');

router.post('/', async (req, res) => {
    try {
        // Destructuring the data sent from the frontend
        const { customerName, totalAmount, itemList } = req.body;

        // Constructing the order data
        const orderData = new OrderModel({
            customerName: customerName,
            totalAmount: totalAmount,
            itemList: itemList
        });

        // Saving the order data to the database
        const savedOrder = await orderData.save();

        // Sending a response with the saved order data
        res.status(201).json(savedOrder);
    } catch (err) {
        // Log the error for debugging
        // console.error('Error saving order:', err);

        // Sending an error response
        res.status(500).json({ error: 'Failed to save order. Please try again later.' });
    }
});

router.get('/', async (req, res) => {
    try {
        const orderData = await OrderModel.find();
        res.json(orderData)
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve orders. Please try again later.' });
    }
});


module.exports = router;
