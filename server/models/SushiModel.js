const mongoose = require('mongoose')

const SushiSchema = new mongoose.Schema(
    {
        name: String,
        imgsrc: String,
        price: Number,
        description: String
    },{
        collection: 'Sushi'
    }
)

module.exports = mongoose.model('Sushi', SushiSchema);