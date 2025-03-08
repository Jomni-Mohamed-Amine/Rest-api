const mongoose=require('mongoose')

const Userschema=new mongoose.Schema({
    name:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
})
module.exports=User=mongoose.model('User',Userschema)