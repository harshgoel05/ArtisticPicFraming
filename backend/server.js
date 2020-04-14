require("dotenv").config();
const express = require("express");
const app = express();
const router=express.Router();
const mongoose=require('mongoose')
const User=require('./model/user')
const cors = require("cors");
const qr = require("qr-image");
const fs = require("fs");
const bodyParser = require("body-parser");
const api = require("./api");
const uuid = require("uuid/v4");
const nodemailer = require("nodemailer");
const stripe = require("stripe")("sk_test_9UhQivpSo4yuuExMR7ouzfei00Z3EieXgc");
const exphbs = require("express-handlebars");
app.use(cors());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", api);
const db=process.env.db
mongoose.connect(db,{useNewUrlParser: true},err=>{
    if(err) 
{
    console.log('cannot connect')
}
else
{
    console.log('connected to database ');
}
});
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
var transporter_shop = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
app.use(express.static("./public"));
var receipt_url;

app.get("/", function(req, res) {
  res.send("connected");
});
let amount;

app.get("/payment", (req, res)=> {
  res.render("payment", {
    stripePublishableKey: "pk_test_Jo6Z70CqWXvzFqGYB8XLGxQo00kZVvz4Kk"
  });
});

// Charge Route
app.post("/charge", (req, res) => {
  const amount = req.body.amount*100;
  console.log(req.body);
  const idempotencyKey = uuid();
  User.updateOne({user_id:req.body.user_id},{address:req.body.address},(err,data)=>{
    console.log('updated')
  })

  stripe.customers
    .create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken
    })
    .then(customer => {
      stripe.charges
        .create(
          {
            amount,

            description: `ArtisticPicFraming`,
            currency: "usd",
            customer: customer.id,
            shipping: {
              name: req.body.name,
              address: req.body.address
            }
          },
          { idempotencyKey }
        )
        .catch(err => {
          console.log(err);
          res.send({ payment: false });
        })
        .then(charge => {
          if (charge.status == "succeeded")
            res.status(200).send({ payment: true });
          console.log(charge);
          var qr_png = qr.imageSync(
            "price:" + amount + "\nProduct name:ArtisticFrame",
            { type: "png" }
          );
          let qr_name = "new1.png";
          fs.writeFileSync("./public/" + qr_name, qr_png, err => {
            if (err) {
              console.log(err);
            }
          });
          User.updateOne({user_id:req.body.user_id},{$set:{cart:[]}},(err,data)=>{
            console.log('cart is empty  ')
          })
        
          

          var mailOptions = {
            from: "predatesan@gmail.com",
            to: req.body.stripeEmail,
            subject: "Order Confirmation",
            text:
              "You order has been succefully confirmed\n" + charge.receipt_url,
            html:
              '<h1>Scan the code</h1><br><img src="cid:img1"><a href="' +
              charge.receipt_url +
              '"><button>Receipt</button></a>',
            attachments: [
              {
                filename: "new1.png",
                path: "./public/new1.png",
                cid: "img1"
              }
            ]
          };
          var mailOptions_shop = {
            from: "predatesan@gmail.com",
            to: 'sanskarag23@gmail.com',
            subject: "Order Created",
            text:
              "New order\n" + charge.receipt_url,
            html:
              '<h1>Scan the code</h1><br><img src="cid:img1"><a href="' +
              charge.receipt_url +
              '"><button>Receipt</button></a>',
            attachments: [
              {
                filename: "new1.png",
                path: "./public/new1.png",
                cid: "img1"
              }
            ]
          };
          transporter_shop.sendMail(mailOptions, function(error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
          transporter.sendMail(mailOptions_shop, function(error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
        });
    });
});
var port = 3000;
app.listen(process.env.PORT || port, () => {
  console.log(`server running on port ${port}`);
});
