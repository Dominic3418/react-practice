const mongoose = require("mongoose")

//REGISTER

const UserSchema = new mongoose.model({
    username: {
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:"",
    },
});
module.exports = mongoose.model("User, schema");