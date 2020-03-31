import { Component, OnInit, Input } from '@angular/core';
import { BackendService} from '../backend.service'
import {Router} from '@angular/router'
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms'
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  elements: Elements;
card: StripeElement;
email:String;
payment_status:Boolean


elementsOptions: ElementsOptions = {
  locale: 'auto'
  };

  stripeTest: FormGroup;
  user_details: FormGroup;
  constructor(private back:BackendService,
    private fb:FormBuilder,
   private stripeService:StripeService,
   private route:Router) { }
  ngOnInit()
  { 
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required,
        Validators.minLength(4)]],
      email:['',[Validators.required]]  ,
      line1:['',[Validators.required]],
      city:['',[Validators.required]],
      postalcode:['',[Validators.required]],
      state:['',[Validators.required]],
      country:['',[Validators.required]]


      });
      this.stripeService.elements(this.elementsOptions)
.subscribe(elements => {
this.elements = elements;

if (!this.card) {
this.card = this.elements.create('card', {
style: {
base: {
iconColor: '#87BBFD',
color: '#31325F',
lineHeight: '40px',
fontWeight: 300,
fontFamily:  'Roboto, Open Sans, Segoe UI, sans-serif',
fontSize: '18px',
'::placeholder': {
  color: '#87BBFD'
}
}
}
});
this.card.mount('#card-element');
}
});

}
private payment_details={'stripeEmail':'',}
  buy() {
    
    const name = this.stripeTest.get('name').value ;
    this.stripeService
    .createToken(this.card, { name })
    .subscribe(obj => {
    if (obj.token) {
    this.back.payment({'user_id':localStorage.getItem('user_id'),'stripeEmail':this.stripeTest.get('email').value,
                      'stripeToken':obj.token.id,
                      'name':name,
                      'address':{line1:this.stripeTest.get('line1').value,
                                 postal_code:this.stripeTest.get('postalcode').value ,
                                 city:this.stripeTest.get('city').value,
                                state:this.stripeTest.get('state').value,
                              country:this.stripeTest.get('country').value  }})
    .subscribe(res=>{console.log(res);
                    this.payment_status=res.payment;
                  setTimeout(()=>{
                    this.route.navigate(['/Home'])
                  },50000)}
                    
                    
                    )
    }
    else{
  
    }
  });
  }

}