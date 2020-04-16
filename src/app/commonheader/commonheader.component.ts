import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-commonheader",
  templateUrl: "./commonheader.component.html",
  styleUrls: ["./commonheader.component.css"],
})
export class CommonheaderComponent implements OnInit {
  public href: string = "";
  page: string;
  constructor(private router: Router) {}
  eventrue = true;
  oddtrue = false;
  neutraltrue = false;
  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
    if (this.href == "/contact") {
      this.page = "Contact us";
      this.eventrue = false;
      this.oddtrue = true;
      this.neutraltrue = false;
    } else if (this.href == "/latest-designs") {
      this.page = "Latest Designs";
      this.eventrue = true;
      this.oddtrue = false;
      this.neutraltrue = false;
    } else if (this.href == "/design-process") {
      this.page = "Design and Process";
      this.eventrue = false;
      this.oddtrue = false;
      this.neutraltrue = true;
    } else if (this.href == "/craftman-framing") {
      this.page = "Craftman Framing";
      this.eventrue = true;
      this.oddtrue = false;
      this.neutraltrue = false;
    } else if (this.href == "/corporate-consulting") {
      this.page = "Corporate Consulting";
      this.eventrue = false;
      this.oddtrue = true;
      this.neutraltrue = true;
    } else if (this.href == "/canvas-stretching") {
      this.page = "Canvas Stretching";
      this.eventrue = true;
      this.oddtrue = false;
      this.neutraltrue = false;
    } else if (this.href == "/value-framing") {
      this.page = "Value Framing";
      this.eventrue = false;
      this.oddtrue = true;
      this.neutraltrue = true;
    } else if (this.href == "/printing-services") {
      this.page = "Printing Services";
      this.eventrue = false;
      this.oddtrue = true;
      this.neutraltrue = false;
    } else if (this.href == "/parkingmap") {
      this.page = "Parking Map";
      this.eventrue = true;
      this.oddtrue = false;
      this.neutraltrue = false;
    } else if (this.href == "/special-offers") {
      this.page = "Special Offers";
      this.eventrue = false;
      this.oddtrue = false;
      this.neutraltrue = true;
    } else if (this.href == "/home-consulting") {
      this.page = "Home Consulting";
      this.eventrue = false;
      this.oddtrue = true;
      this.neutraltrue = false;
    } else if (this.href == "/delivery-and-installation") {
      this.page = "Delivery & Installation";
      this.eventrue = true;
      this.oddtrue = false;
      this.neutraltrue = false;
    } else if (this.href == "/cart") {
      this.page = "Your Cart";
      this.eventrue = true;
      this.oddtrue = false;
      this.neutraltrue = false;
    } else {
      this.page = "Page not Found";
    }
  }
}
