const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        message: String,
    },{
        collection: 'Contact'
    }
)

module.exports = mongoose.model('ContactModel', ContactSchema);