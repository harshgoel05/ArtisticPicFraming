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
    } else if (this.href == "/latest-designs") {
      this.page = "Latest Designs";
    } else if (this.href == "/craftman-framing") {
      this.page = "Craftman Framing";
    } else if (this.href == "/corporate-consulting") {
      this.page = "Corporate Consulting";
    } else if (this.href == "/canvas-stretching") {
      this.page = "Canvas Stretching";
    } else if (this.href == "/value-framing") {
      this.page = "Value Framing";
    } else if (this.href == "/printing-services") {
      this.page = "Printing Services";
    } else if (this.href == "/parkingmap") {
      this.page = "Parking Map";
    } else if (this.href == "/special-offers") {
      this.page = "Special Offers";
    } else if (this.href == "/home-consulting") {
      this.page = "Home Consulting";
    } else if (this.href == "/delivery-and-installation") {
      this.page = "Delivery & Installation";
    } else {
      this.page = "Page not Found";
    }
  }
}
