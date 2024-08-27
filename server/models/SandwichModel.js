const mongoose = require('mongoose')

const SandwichSchema = new mongoose.Schema(
    {
        name: String,
        imgsrc: String,
        price: Number,
        description: String
    },{
        collection: 'Sandwich'
    }
)

module.exports = mongoose.model('Sandwich', SandwichSchema);