const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 4000

//create the express app
const app = express()

//use bodyParser functionality of express
app.use(express.json())

//use CORS for server connection
app.use(cors())

//import the routes
const burgerRoutes = require('./routes/burgerRoutes')
const pizzaRoutes = require('./routes/pizzaRoutes')
const burritosRoutes = require('./routes/burritosRoutes')
const sushiRoutes = require('./routes/sushiRoutes')
const friesRoutes = require('./routes/friesRoutes')
const sandwichRoutes = require('./routes/sandwichRoutes')
const drinksRoutes = require('./routes/drinksRoutes')
const restaurantRoutes  = require('./routes/restaurantRoutes')
const customerRoutes  = require('./routes/customerRoutes')
const revenueRoutes  = require('./routes/revenueRoutes')
const orderRoutes = require('./routes/orderRoutes')
const adminRoutes  = require('./routes/adminRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
const contactRoutes = require('./routes/contactRoutes')


//connect to the mongodb database
mongoose.connect("mongodb://localhost:27017/MESAA")
    .then(() => console.log("Connected to MongoDB Database Successfully"))
    .catch(err => console.log("Error connecting to the MongoDB database:",err))

//Call APIs

app.use("/getBurger", burgerRoutes);
app.use("/getPizza", pizzaRoutes);
app.use("/getSushi",sushiRoutes);
app.use("/getSandwich", sandwichRoutes);
app.use("/getFries", friesRoutes);
app.use("/getDrinks", drinksRoutes);;
app.use("/getBurritos", burritosRoutes);
app.use("/getRestaurant",restaurantRoutes)
app.use('/getCustomers', customerRoutes)
app.use('/revenueData', revenueRoutes)
app.use('/postOrder',orderRoutes )
app.use('/getOrders',orderRoutes )
app.use('/getAdmin', adminRoutes);
app.use('/getReview', reviewRoutes);
app.use('/submitReview',reviewRoutes);
app.use('/getContact', contactRoutes);
app.use('/postContact', contactRoutes);


//Start the server
app.listen(PORT, ()=>{
    console.log(
        `Server is running on PORT ${PORT}`
    )
})