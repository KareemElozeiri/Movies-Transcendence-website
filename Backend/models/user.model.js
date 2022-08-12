const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    age:{
        type: number,
        required: true
    },
    password:{
        type: String,
        unique: true
    }

},{timestamps:true});


module.exports = mongoose.model("User", userSchema);
