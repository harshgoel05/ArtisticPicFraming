import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }
  BaseUrl='http://localhost:3000';
  url=this.BaseUrl+'/api/addtocart'
  paymenturl=this.BaseUrl+'/charge'
  create_id=this.BaseUrl+'/api/create_id'

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
  
}
