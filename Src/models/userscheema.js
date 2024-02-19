const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({    // collection of data from signup.ejs
    username: {type: String,  required : true},
    emailOrPhone: {type: String,  required : true},
   password: {type: String,  required : true},
});

const userSignup =  new mongoose.model("userData",userSchema); // model using getting user collection and user schema 
module.exports = userSignup //export user details

