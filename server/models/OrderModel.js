const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
        customerName: {
            type: String,
            required: true // Ensure that customerName is required
        },
        totalAmount: {
            type: Number,
            required: true // Ensure that totalAmount is required
        },
        itemList: [
            {
                name: {
                    type: String,
                    required: true // Ensure that name is required for each item
                },
                price: {
                    type: Number,
                    required: true // Ensure that price is required for each item
                },
                quantity: {
                    type: Number,
                    required: true // Ensure that quantity is required for each item
                }
            }
        ]
    },
    {
        collection: 'OrderInfo'
    }
);

module.exports = mongoose.model('OrderInfo', OrderSchema);
