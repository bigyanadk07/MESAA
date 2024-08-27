const mongoose = require('mongoose')

const RevenueSchema = new mongoose.Schema(
    {
        month: String,
        revenue: Number
    },{
        collection: 'Revenue'
    }
)

module.exports = mongoose.model("RevenueModel", RevenueSchema);