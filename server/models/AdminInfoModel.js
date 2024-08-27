const mongoose = require('mongoose');

const AdminInfoSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId, // Use ObjectId type for id field
        username: String,
        password: String,
        name: String
    },
    {
        collection: 'AdminInfo'
    }
);

module.exports = mongoose.model('AdminInfo', AdminInfoSchema);

