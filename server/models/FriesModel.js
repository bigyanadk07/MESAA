const mongoose = require('mongoose')

const FriesSchema = new mongoose.Schema(
    {
        name: String,
        imgsrc: String,
        price: Number,
        description: String
    },{
        collection: 'Fries'
    }
)

module.exports = mongoose.model('Fries', FriesSchema);