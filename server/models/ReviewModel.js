const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema(
    {
        name: String,
        message: String,
    },{
        collection: 'CustomerReview'
    }
)

module.exports = mongoose.model('ReviewModel', ReviewSchema);