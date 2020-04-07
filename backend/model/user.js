const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema
({
        user_id:String,
        email:String,
        address:Object,
        amount_pay:Number,
        cart:[]
        

        
    
        
     




}
)
module.exports=mongoose.model('cart',userSchema,'user')