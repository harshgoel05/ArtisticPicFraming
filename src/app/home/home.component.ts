import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BackendService } from '../backend.service';
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private _router: Router,private back:BackendService) {}

  ngOnInit() {
    this.back.ByCart=false
  }
}
