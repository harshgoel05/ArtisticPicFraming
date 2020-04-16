const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')
const User=require('./model/user')
const product = require('./model/product')
const db=process.env.db

mongoose.connect(db,{useNewUrlParser: true},err=>{
    if(err) 
{
    console.log('cannot connect')
}
else
{
    console.log('connected to database');
}
});
router.get('/',(req,res)=>{
    res.send('connected to api')
});
/*
INDEX
1. Creating ID for new user                                                Working
2. Fetch Products                                                          Working
3. 

*/

//Id Generation for new user
router.post('/create_id',(req,res)=>
{
    const user=req.body
    const user1=User(user)
    user1.save((err,data)=>
    {
        if(err)
        {
            console.log("cannot enter record")
        }
        else{

            res.status(200).send({"enter":"success"})
        }
        
    })

})
/************************************************************
					APIS FOR PRODUCTS
*************************************************************/
//Fetch items
/*Respone body
[
    {
        id:'object_id',
        image:'image_address',
        name:'Name of Product'
        price:'price of product'(integer)
    }
]
*/
router.get('/getProducts',(req, res) => {
    product.find({}, (err,data) => {
        if(err){
            res.status(400).send({message:'Error while fetching data'})
        }
        else{
            res.status(200).send(data)
        }
    })
})
/************************************************************
					APIS FOR CART
*************************************************************/
//Add to Cart
/*Request Body
    {
        'user_id':'Id Generated at Frontend',
        'item':{
            image:'../../assets/img.jpeg',
            name:'name of item',
            price: 1000       
        }    
    }
*/
router.post('/addtocart',(req,res)=>
{   const item=req.body
    User.find({user_id:item.user_id,"cart.name":item.item.name},(err,data)=>{
        if(err){
            res.status(400).send({message:"Cannot Add to Cart"})
        }
        else{
            console.log(data)
            if(data.length!=0){
                
                console.log('add1')
                User.update({user_id:item.user_id,"cart.name":item.item.name},{$inc:{"cart.$.quantity":item.item.quantity}}, (err,data) => {
                    if(err){
                        res.status(400).send({message:'Error While Adding to Cart'})
                    }
                    else{
                        res.status(200).send({message:'Added to Cart'})
                    }
                })
            }
            else{
                console.log('add2')
                User.update({user_id:item.user_id},{$push:{cart:item.item}},(err,data) => {
                    if(err){
                        res.status(400).send({message:'Error While Adding to Cart'})
                    }
                    else{
                        res.status(200).send({message:'Added to Cart'})
                    }
                })
            }
           
        }
    })
    
})
//Remove Item from Cart
/*
Request Body
{
    user_id:'Id Generated at Frontend',
    name:'Item name'
}
*/
router.post('/remove_from_cart',(req,res)=>
{
    const item=req.body
    
    User.update({user_id:item.user_id},{$pull:{cart:{name:item.name}}},(err,data)=>{
        if(err)
        {
            console.log("error in adding to cart");
            res.status(400).send();

        }
        else{
            res.status(200).send({message:"Item Removed"})
        }
    })
})
//Change the Quantity Of Item in Cart

router.post('/change_quantity',(req,res)=>{
    const item=req.body
    User.updateMany({user_id:item.user_id,"cart.product_id":item.product_id},{$set:{"cart.$.quantity":item.quantity}},(err,data)=>
    {
        if(err)
        console.log("error in updating ")
        else
        {
            res.status(200).send({message:'Quantity Updated'})
        }
    })
})
//Get the contents of Cart
/*
Request Body
{
    user_id:'Id Generated at Frontend'
}
*/
router.post('/show_cart',(req,res)=>
{   const user=req.body
    User.findOne({user_id:user.user_id},{cart:1},(err,data)=>
    {
        if(err){
            console.log("cannot fetch data")
        }
        else
        {   
            res.status(200).send(data)
        }
    })
})
//Adding user's Adress and Email 
/*
Request Body
{
    user_id:'Id Generated at Frontend',
    address:'Item name',
    email:'email'
}
*/
router.post('/add_address&email',(req,res)=>{
    const user=req.body
    User.updateOne({user_id:user.usr_id},{address:user.address,email:user.email},(err,data)=>
    {
        if(err)
        console.log('cannot enter address')
        else
        res.status(200).send({'Address':true,'email':true})
    })
})
//Updates total Amount of Cart's Products
/*
Request Body
{
    user_id:'Id Generated at Frontend',
    amount:'Cart Product Amount'
}
*/
router.post('/current_amount',(req,res)=>{
    const amount = req.body
    User.updateOne({user_id:amount.user_id},{amount_pay:amount.amount},(err,data)=>{
        if(err)
        {
            res.status(400)
        }
        else{
            res.status(200).send({'amount':'success'})
        }
    }) 


})
//Get total amount of cart's product
/*
Request Body
{
    user_id:'Id Generated at Frontend',
    
}
*/
router.post('/cart_amount',(req,res)=>{
    const userid=req.body
    User.findOne({user_id:userid.user_id},{amount_pay:1},(err,data)=>{
        if(err)
        {
            console.log(err)

        }
        else
        {
            res.status(200).send(data)
            console.log(data)
        }
    })
})






module.exports=router
