import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";
import { CommonheaderComponent } from "./commonheader/commonheader.component";
import { Error404Component } from './error404/error404.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ValueframingComponent } from './valueframing/valueframing.component';
import { SpecialoffersComponent } from './specialoffers/specialoffers.component';
import { PrakingmapComponent } from './prakingmap/prakingmap.component';
import { PrintingservicesComponent } from './printingservices/printingservices.component';
import { HomeconsultingComponent } from './homeconsulting/homeconsulting.component';
import { DeliveryinstallComponent } from './deliveryinstall/deliveryinstall.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    CommonheaderComponent,
    Error404Component,
    SidebarComponent,
    ValueframingComponent,
    SpecialoffersComponent,
    PrakingmapComponent,
    PrintingservicesComponent,
    HomeconsultingComponent,
    DeliveryinstallComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
