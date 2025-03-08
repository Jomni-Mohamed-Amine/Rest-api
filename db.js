const mongoose=require('mongoose')

const connectDb=async()=>{
    try{
      const con=await mongoose.connect('mongodb://localhost:27017/UserRestapi')
console.log('connected to database')
    }
    catch(err){
        console.error(`'Error :,${err.message}`)
    }
}
module.exports=connectDb