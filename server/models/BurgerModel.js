const mongoose = require('mongoose')


//ya tala aba Burger ko lagi euta db schema define garne
const BurgerSchema = new mongoose.Schema({
    //ya aba model define garda hamile database ko collection ma field:value pair ko type j xa tei halne verify garna lai
    name: String,
    description: String,
    price: Number,
    imgsrc: String
},{
    //Yo mulasag dherai important kura, yo bhayena bhane data nai fetch hudaina raixa, malai yeti bujhna 3 din lagyo
    //esle chai database bata kun collection ma data check garne bhanxa
    collection: 'Burgers'
}
);


//Aba yo bhaneko chai yo model lai export garne matra ho
//esma const "modename" = mongoose.model("db ma collection ko nam j xa tyo ya rakhne"," schema ko nam mathi define gareko")
module.exports = mongoose.model("Burger", BurgerSchema);
