const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema
({
        user_id:String,
        email:String,
        cart:[]
        

        
    
        
     




}
)
module.exports=mongoose.model('cart',userSchema,'user')