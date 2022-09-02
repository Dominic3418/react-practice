const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")

dotenv.config();

mongoose.connect('mongodb://localhost:27017/test')
.then(console.log('it worked!!!!'))
.catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen('5000', () => {
    console.log('backend is running')
});
