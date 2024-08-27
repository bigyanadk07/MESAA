const mongoose = require('mongoose')

const UserInfoSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId, // Use ObjectId type for id field
        name: String,
        username: String,
        password: String
    },{
        collection: 'UserInfo'
    }
)

module.exports = mongoose.model('UserInfo', UserInfoSchema);