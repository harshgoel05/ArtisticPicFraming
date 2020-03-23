import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { Error404Component } from "./error404/error404.component";
import { ValueframingComponent } from "./valueframing/valueframing.component";
import { SpecialoffersComponent } from "./specialoffers/specialoffers.component";
import { PrakingmapComponent } from "./prakingmap/prakingmap.component";
import { PrintingservicesComponent } from "./printingservices/printingservices.component";
import { HomeconsultingComponent } from "./homeconsulting/homeconsulting.component";
import { DeliveryinstallComponent } from "./deliveryinstall/deliveryinstall.component";
import { LtsdesignComponent} from "./ltsdesign/ltsdesign.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "lstdesigns", component: LtsdesignComponent },
  { path: "contact", component: ContactComponent },
  { path: "value-framing", component: ValueframingComponent },
  { path: "special-offers", component: SpecialoffersComponent },
  { path: "parkingmap", component: PrakingmapComponent },
  { path: "printing-services", component: PrintingservicesComponent },
  { path: "home-consulting", component: HomeconsultingComponent },
  { path: "delivery-and-installation", component: DeliveryinstallComponent },
  { path: "**", component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent, LtsdesignComponent, ContactComponent, ValueframingComponent,
   SpecialoffersComponent, PrakingmapComponent, PrintingservicesComponent, HomeconsultingComponent, 
   DeliveryinstallComponent, Error404Component];
