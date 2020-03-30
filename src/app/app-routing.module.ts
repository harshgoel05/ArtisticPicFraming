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
import { LtsdesignComponent } from "./ltsdesign/ltsdesign.component";
import { BlogComponent } from "./blog/blog.component";
import { CraftmanframingComponent } from "./craftmanframing/craftmanframing.component";
import { CorporateconsultingComponent } from "./corporateconsulting/corporateconsulting.component";
import { CanvasStretchingComponent } from "./canvas-stretching/canvas-stretching.component";
import { DesignprocessComponent } from "./designprocess/designprocess.component";
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "latest-designs", component: LtsdesignComponent },
  { path: "craftman-framing", component: CraftmanframingComponent },
  { path: "contact", component: ContactComponent },
  { path: "value-framing", component: ValueframingComponent },
  { path: "special-offers", component: SpecialoffersComponent },
  { path: "parkingmap", component: PrakingmapComponent },
  { path: "design-process", component: DesignprocessComponent },
  { path: "printing-services", component: PrintingservicesComponent },
  { path: "home-consulting", component: HomeconsultingComponent },
  { path: "corporate-consulting", component: CorporateconsultingComponent },
  { path: "delivery-and-installation", component: DeliveryinstallComponent },
  { path: "canvas-stretching", component: CanvasStretchingComponent },
  { path: "blog", component: BlogComponent },
  { path: "**", component: Error404Component },
  { path: "payment", component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  LtsdesignComponent,
  ContactComponent,
  ValueframingComponent,
  SpecialoffersComponent,
  PrakingmapComponent,
  PrintingservicesComponent,
  HomeconsultingComponent,
  DeliveryinstallComponent,
  Error404Component
];
