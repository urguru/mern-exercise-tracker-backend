const mongoose=require('mongoose');

const Schema=mongoose.Schema
const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
},{
    timestamps:true
})

userSchema.virtual('exercises',{
    ref:'Exercise',
    localField:'_id',
    foreignField:'owner'
})

const User=mongoose.model('User',userSchema)

module.exports=User