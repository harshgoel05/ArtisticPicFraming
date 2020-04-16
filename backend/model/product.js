const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ProductSchema=new Schema
({
       name:String,
       image:String,
       price:Number
}
)
module.exports=mongoose.model('product',ProductSchema,'product')