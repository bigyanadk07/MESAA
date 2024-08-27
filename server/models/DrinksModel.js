const mongoose = require('mongoose')

const DrinksSchema = new mongoose.Schema(
    {
        name: String,
        imgsrc: String,
        price: Number,
        description: String
    },{
        collection: 'Drinks'
    }
)

module.exports = mongoose.model('Drinks', DrinksSchema);