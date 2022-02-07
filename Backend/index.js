const express = require('express');
const mongoose = require('mongoose');
const userRoute=require("./routes/user")
const authRoute=require("./routes/auth")
const productRoute=require("./routes/product")
const cartRoute=require("./routes/cart")
const orderRoute=require("./routes/order")
// to use env file
const dotenv=require("dotenv");  
// set up our express app
const app = express(); 


dotenv.config();
// connect to mongodb
mongoose.connect(process.env.MONGO_URL).then(()=>console.log('DB Connected'))
.catch((err)=>{
    console.log(err);
})

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);

// listen for requests
app.listen(process.env.PORT || 5000, function(){
    console.log('Ready to Go!');
});