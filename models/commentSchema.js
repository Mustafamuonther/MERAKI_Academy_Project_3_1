const mongoose = require("mongoose"); 


const commentSchema =new mongoose.Schema({
comment:{type:String,required:true},
commenter:{type:mongoose.Schema.Types.ObjectId,ref:"User"}

});



const model=mongoose.model("comment",commentSchema)


module.exports=model