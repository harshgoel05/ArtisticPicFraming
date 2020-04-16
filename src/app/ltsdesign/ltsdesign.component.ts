import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-ltsdesign',
  templateUrl: './ltsdesign.component.html',
  styleUrls: ['./ltsdesign.component.css']
})
export class LtsdesignComponent implements OnInit {
  design_array : any
  quantity = new Array
  added = new Array;
  errormessage;
  successmessage;
  constructor(private back:BackendService) { }

  ngOnInit() {
    this.back.getProducts()
    .subscribe( res => {
      this.design_array = res
      let size=this.design_array.length
      console.log(this.design_array)
      let i;
      for(i=0;i<size;i++){
      this.quantity.push(1)
      }
    })
  }
  _addtocart(i){
    
    let  _design_details={'user_id':localStorage.getItem('user_id'),
                          'item':{'image':this.design_array[i].image,'name':this.design_array[i].name,'price':this.design_array[i].price,'quantity':this.quantity[i]}}
    this.back.addtocart(_design_details)
    .subscribe(res=>{
      console.log('added to cart')
      let j;
      for(j=0;j<res.length;j++){
        this.added.push(0);
      }
      this.added[i]=1;
      this.successmessage=res.message
      }
      ,err => {
      this.errormessage=err.message;
    })
  }
}
