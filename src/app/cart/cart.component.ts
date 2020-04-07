import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private order_total=1000;
  constructor(private back:BackendService,
              private route:Router) { }
  

  ngOnInit() {
    
  }
  payment()
  {
    this.back.cart_amount_submit({'user_id':localStorage.getItem('user_id'),'amount':this.order_total}).subscribe(res=>
      {
        console.log(res)
      })
    this.route.navigate(['/payment']);
  }
}
