const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema(
    {
        name: String,
        address: String,
        contact: Number,
        email: String
    },{
        collection: 'Customers'
    }
)

module.exports = mongoose.model('CustomerModel', CustomerSchema);