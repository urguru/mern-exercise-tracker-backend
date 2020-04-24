const mongoose=require('mongoose')

const exerciseSchema=new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    desc:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    username:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Exercise=mongoose.model('Exercise',exerciseSchema)

module.exports=Exercise