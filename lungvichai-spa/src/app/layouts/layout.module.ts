import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContentComponent
  ],
  imports: [CommonModule, LayoutRoutingModule]
})
export class LayoutModule {}
