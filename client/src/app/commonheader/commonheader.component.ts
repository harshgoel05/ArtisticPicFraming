import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-commonheader",
  templateUrl: "./commonheader.component.html",
  styleUrls: ["./commonheader.component.css"]
})
export class CommonheaderComponent implements OnInit {
  public href: string = "";
  page: string;
  constructor(private router: Router) {}

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
    if (this.href == "/contact") {
      this.page = "Contact us";
    }
  }
}
