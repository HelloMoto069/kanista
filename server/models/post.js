const mongoose = require('mongoose')
const {ObjesctId} = mongoose.Schema.Types



const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
    },
    postedBy:{
        type:String,
        required:true,
    }
})

mongoose.model("Post", postSchema)