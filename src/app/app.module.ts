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
    CanvasStretchingComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
