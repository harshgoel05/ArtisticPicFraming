require('dotenv').config();
const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const api=require('./api')
const uuid=require('uuid/v4')
const nodemailer = require('nodemailer');


const stripe = require('stripe')('sk_test_9UhQivpSo4yuuExMR7ouzfei00Z3EieXgc');
const exphbs = require('express-handlebars');
app.use(cors());
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api',api);
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:process.env.EMAIL,
    pass: process.env.PASSWORD  
  }
});

var mailOptions = {
  from: 'predatesan@gmail.com',
  to: 'sanskarag23@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};




app.get('/',function(req,res)
{
    res.send('connected')
})
let  amount;


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
        name: 'Jenny Rosen',
        address: {
          line1: '510 Townsend St',
          postal_code: '98140',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
        }}},{idempotencyKey}
    
    ).catch(err=>{console.log(err);
    res.send({'payment':'unsuccess'})
    }
    )
    .then(charge => {res.status(200).send({'payment':'success'})
    console.log(charge)
    transporter.sendMail(mailOptions, function(error, info){
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