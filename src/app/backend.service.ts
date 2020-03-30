import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/api/addtocart'
  paymenturl='http://localhost:3000/charge'

  addtocart(data)
  {
    return this.http.post<any>(this.url,data)
  }
  payment(data)
  {
    return this.http.post<any>(this.paymenturl,data)
  }
  
}
