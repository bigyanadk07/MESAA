const mongoose = require('mongoose')

const BurritosSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    imgsrc: String
},{
    collection: 'Burritos'
}
);

module.exports = mongoose.model("Burritos", BurritosSchema);
