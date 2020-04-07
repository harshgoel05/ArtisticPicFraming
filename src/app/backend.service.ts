import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }
  private amount_sub=new Subject<any>()
  amount_obsv$=this.amount_sub.asObservable();
  amount_state(state:any){
    this.amount_sub.next(state);
  }
  //url
  BaseUrl='http://localhost:3000';
  url=this.BaseUrl+'/api/addtocart'
  paymenturl=this.BaseUrl+'/charge'
  create_id='http://localhost:3000/api/create_id'
  cart_amount=this.BaseUrl+'/api/current_amount'
  cart_amount_url=this.BaseUrl+'/api/cart_amount'


  addtocart(data)
  {
    return this.http.post<any>(this.url,data)
  }
  payment(data)
  {
    return this.http.post<any>(this.paymenturl,data)
  }
  create(data)
  {
    return this.http.post<any>(this.create_id,data);
  }
  cart_amount_submit(data)
  {
    return this.http.post<any>(this.cart_amount,data);
  }
  cart_amount_retrieve(data)
  {
    return this.http.post<any>(this.cart_amount_url,data)
  }
  
}
