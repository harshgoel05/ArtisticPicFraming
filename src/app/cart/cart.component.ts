import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private order_total=0;
  private tax=200
  private cart:any
  constructor(private back:BackendService,
              private route:Router) {

               }
  

  ngOnInit() {
    this.back.ByCart=false
    this.order_total=0;
    this.cart_retrieve();
    
    

  }
  payment()
  {
    this.back.cart_amount_submit({'user_id':localStorage.getItem('user_id'),'amount':this.order_total+this.tax}).subscribe(res=>
      {
        console.log(res)
      })
      this.back.ByCart=true
    this.route.navigate(['/payment']);
  }
  cart_retrieve(){
    this.back.cart_data().subscribe(res=>{
      this.cart=res.cart
      for(let i=0;i<this.cart.length;i++){
        this.order_total+=this.cart[i].quantity*this.cart[i].price;
      }
      console.log(res)
      if(res.cart.length==0){
        this.tax=0
      }
    })
  }
  remove_item(i){
    this.back.remove_item({'user_id':localStorage.getItem('user_id'),'name':this.cart[i].name})
    .subscribe(res=>{
      this.order_total-=this.cart[i].quantity*this.cart[i].price;
      this.ngOnInit()
      console.log(res)
    })
  }
 
}
