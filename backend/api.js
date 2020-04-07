const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')
const User=require('./model/user')



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

router.post('/addtocart',(req,res)=>
{
    const item=req.body
    User.update({user_id:item.user_id},{$push:{cart:item.item}},(err,data)=>{
        if(err)
        {
            console.log("error in adding to cart");
            res.status(400).send({'status':'Not added'});

        }
        else{
            res.status(200).send({'status':'added'})
        }
    })
})
router.post('/remove_from_cart',(req,res)=>
{
    const item=req.body
    
    User.update({user_id:item.user_id},{$pull:{cart:{product_id:item.product_id}}},(err,data)=>{
        if(err)
        {
            console.log("error in adding to cart");
            res.status(400).send();

        }
        else{
            res.status(200).send({'status':'removed'})
        }
    })
})
router.post('/change_quantity',(req,res)=>{
    const item=req.body
    User.updateMany({user_id:item.user_id,"cart.product_id":item.product_id},{$set:{"cart.$.quantity":item.quantity}},(err,data)=>
    {
        if(err)
        console.log("error in updating ")
        else
        {
            res.status(200).send({"quantity":"updated"})
        }
    })
})
router.post('/show_cart',(req,res)=>
{   const user=req.body
    User.findOne({user_id:user.user_id},(err,data)=>
    {
        if(err)
        console.log("cannot fetch data")
        else
        {
            res.status(200).send(data)
        }
    })
})
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
