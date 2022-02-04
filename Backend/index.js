const express = require('express');
const mongoose = require('mongoose');
const userRoute=require("./routes/user")
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

app.use("/api/users",userRoute);

app.use(express.json());

// listen for requests
app.listen(process.env.PORT || 5000, function(){
    console.log('Ready to Go!');
});