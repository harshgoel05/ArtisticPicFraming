import { Component, OnInit } from '@angular/core';
import { BackendService} from '../backend.service'

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


elementsOptions: ElementsOptions = {
  locale: 'auto'
  };

  stripeTest: FormGroup;
  constructor(private back:BackendService,
    private fb:FormBuilder,
   private stripeService:StripeService) { }
  ngOnInit()
  {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
      });
      this.stripeService.elements(this.elementsOptions)
.subscribe(elements => {
this.elements = elements;

if (!this.card) {
this.card = this.elements.create('card', {
style: {
base: {
iconColor: '#666EE8',
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
  buy() {
    const name = this.stripeTest.get('name').value ;
    console.log(this.card)
    
    this.stripeService
    .createToken(this.card, { name })
    .subscribe(obj => {
    if (obj) {
    console.log("Token is --> ",obj.token);
    this.back.payment({'stripeEmail':this.email,
  'stripeToken':obj.token.id}).subscribe(res=>console.log(res))
    }
    else{
  
    }
  });
  }

}