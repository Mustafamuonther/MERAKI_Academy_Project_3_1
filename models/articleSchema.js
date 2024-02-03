const mongoose=require("mongoose")


const article = new mongoose.Schema({

    title:{type:String,required:true},
    description:{type:String,required:true},
    author:{type:String},
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:"Comment"}],

});


const model=mongoose.model("Artical",article)
module.exports=model


