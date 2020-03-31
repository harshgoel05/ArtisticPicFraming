require('dotenv').config();
const express=require('express')
const app=express()
const cors=require('cors')
const qr=require('qr-image')
const fs = require('fs');
const bodyParser=require('body-parser')
const api=require('./api')
const uuid=require('uuid/v4')
const nodemailer = require('nodemailer');
const stripe = require('stripe')(process.env.stripe_secret_key);
const exphbs = require('express-handlebars');
const http = require('http')
const router=express.Router();
const mongoose=require('mongoose')
const User=require('./model/user')
const url='http://localhost:3000/api'
app.use(cors());
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('./public'));
const db=process.env.db
//database Connection
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
//Email authorisation
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:process.env.EMAIL,
    pass: process.env.PASSWORD  
  }
});
var transporter1 = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:process.env.EMAIL,
    pass: process.env.PASSWORD  
  }
});
//http authorization
const options = {
  hostname: url,
  port: 443,
  path: '/add_address&email',
  method: 'POST',
   body:'',

 
  
}


app.use('/api',api);
app.get('/',function(req,res)
{
    res.send('connected')
})
app.get('/payment', (req, res) => {
   res.render('payment', {
      stripePublishableKey: 'pk_test_Jo6Z70CqWXvzFqGYB8XLGxQo00kZVvz4Kk'
    });
  });
  
  // Charge Route
  app.post('/charge', (req, res) => {
    const amount = 2500;
    console.log(req.body)
    const idempotencyKey=uuid()

   
   
    stripe.customers.create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken
    })
    .then(customer => {stripe.charges.create({
      amount,
       
      description: `ArtisticPicFraming`,
      currency: 'usd',
      customer: customer.id,
      shipping: {
        name: req.body.name,
        address: req.body.address}},{idempotencyKey}
    
    ).catch(err=>{console.log(err);
    res.send({'payment':false})
    }
    )
    .then(charge => {
      if(charge.status=='succeeded')
      res.status(200).send({'payment':true})
      console.log(charge)
      User.updateOne({user_id:req.body.user_id},{address:charge.shipping.address,email:req.body.stripeEmail},(err,data)=>{
        if(err)
        console.log('Cannot enter address')
        else
        res.status(200).status({'adress':'updated'})
      })
    var qr_png = qr.imageSync('price:'+amount+'\nProduct name:ArtisticFrame', { type: 'png' });
    let qr_name='qr_code.png'
    fs.writeFileSync('./public/' + qr_name,qr_png , (err) => {
        
      if(err){
      console.log(err);
     }
  
     })

      var mailOptions = {
        from: 'predatesan@gmail.com',
        to: req.body.stripeEmail,
        subject: 'Order Confirmation',
        text: 'You order has been succefully confirmed\n'+charge.receipt_url,
        html:'<h1>Scan the code</h1><br><img src="cid:qrcode"><style>h1{margin:20px;}</style><a href="'+charge.receipt_url+'"><button>Receipt</button></a>',
        attachments:[
            {
              filename:qr_name,
              path:'./public/'+qr_name,
              cid:'qrcode'

            }
        ]
      };
      var mailOptions_owner = {
        from: 'predatesan@gmail.com',
        to: 'sanskarag23@gmail.com',
        subject: 'New Order Created',
        text: 'You order has been succefully confirmed\n'+charge.receipt_url,
        html:'<h1>Order and User Details</h1><br><p>User_id:'+req.body.user_id+'<br>Name:'+charge.billing_details.name+'<br><h4>address<h4>:'+charge.shipping.address.line1+','+charge.shipping.address.city+','+charge.shipping.address.state+','+charge.shipping.address.country+'<br></p><img src="cid:qrcode">',
        attachments:[
            {
              filename:qr_name,
              path:'./public/'+qr_name,
              cid:'qrcode'

            }
        ]
      };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    transporter1.sendMail(mailOptions_owner, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    
  })
  
 

  
  
    
  

  });
  });
var port=3000
app.listen(process.env.PORT||port,()=>
{
    console.log(`server running on port ${port}`)
})