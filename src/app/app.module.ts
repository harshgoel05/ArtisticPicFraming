import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonheaderComponent } from "./commonheader/commonheader.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { BlogComponent } from './blog/blog.component';
import { DesignprocessComponent } from './designprocess/designprocess.component';
import { CraftmanframingComponent } from './craftmanframing/craftmanframing.component';
import { CorporateconsultingComponent } from './corporateconsulting/corporateconsulting.component';
import { CanvasStretchingComponent } from './canvas-stretching/canvas-stretching.component';
import { PaymentComponent } from './payment/payment.component';
import { BackendService} from './backend.service'
import {HttpClientModule} from '@angular/common/http'

import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { NgxStripeModule } from 'ngx-stripe';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CommonheaderComponent,
    SidebarComponent,
    routingComponents,
    BlogComponent,
    DesignprocessComponent,
    CraftmanframingComponent,
    CorporateconsultingComponent,
    CanvasStretchingComponent,
    PaymentComponent,
    CartComponent,
],
  imports: [BrowserModule, 
    AppRoutingModule,
    HttpClientModule,    
    NgxStripeModule.forRoot('pk_test_Jo6Z70CqWXvzFqGYB8XLGxQo00kZVvz4Kk'),
    FormsModule,
    ReactiveFormsModule,
],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {}
