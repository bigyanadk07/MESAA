const mongoose = require('mongoose')

const NameSchema = new mongoose.Schema(
    {
        initial: String,
        name: String,
        location: String
    },
    {
        collection: "RestaurantChains"
    }
)

module.exports = mongoose.model("NameModel", NameSchema)