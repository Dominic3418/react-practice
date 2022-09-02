const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    titles:{
        type: String,
        reuired: true,
        unique: true
    },
    desc:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
        required: false
    },
    username:{
        type: String,
        required: true,
    },
    categories:{
        type:Array,
        required: false,
    }
});
module.exports = mongoose.model("Category, CategorySchema");