import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Artistic-Picture-Framing';
  private user_id;
  private id='user_id'
  constructor(private back:BackendService)
  {}
  ngOnInit()
  {if(!!localStorage.getItem(this.id)){
    this.user_id=localStorage.getItem(this.id)
    
  }
    else{
    this.user_id=uuid.v4();
    localStorage.setItem(this.id,this.user_id)
    console.log(this.user_id)
    this.back.create({'user_id':this.user_id}).subscribe((res)=>{
      console.log(res)
    })
    }
  }
  
}
