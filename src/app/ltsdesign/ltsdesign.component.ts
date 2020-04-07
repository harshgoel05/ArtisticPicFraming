import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-ltsdesign',
  templateUrl: './ltsdesign.component.html',
  styleUrls: ['./ltsdesign.component.css']
})
export class LtsdesignComponent implements OnInit {
  design_array=[{'image':'','name':'Frame1','price':100},{'image':'','name':'Frame2','price':200},{'image':'','name':'Frame3','price':300}]
  private quantity
  constructor(private back:BackendService) { }

  ngOnInit() {
    let i=this.design_array.length
    this.quantity = new Array(i)
    this.quantity.fill(1)
  }
  _addtocart(i){
    
    let  _design_details={'user_id':localStorage.getItem('user_id'),
                          'item':{'image':this.design_array[i].image,'name':this.design_array[i].name,'price':this.design_array[i].price,'quantity':this.quantity[i]}}
    this.back.addtocart(_design_details).subscribe(res=>{
      console.log('added to cart')
    })
  }
}
