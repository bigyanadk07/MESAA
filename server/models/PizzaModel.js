const mongoose = require('mongoose')

const PizzaSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
},
{
    collection: 'Pizza'
}
);

module.exports = mongoose.model("Pizza", PizzaSchema);
