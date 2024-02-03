const mongoose = require("mongoose"); 


const userSchema = new mongoose.Schema({

    firstName:{type: String, required: true},
    lastName:{type:String },
    age:{type:Number},
    country:{type:String},
    email:{type: String,unique: true, required: true},
    password:{type: String, required: true},


});


const model=mongoose.model("User",userSchema)
module.exports=model