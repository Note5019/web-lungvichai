import { UiShowComponent } from "./ui-show/ui-show.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UiComponentsRoutingModule } from "./ui-components-routing.module";

@NgModule({
  declarations: [UiShowComponent],
  imports: [CommonModule, UiComponentsRoutingModule]
})
export class UiComponentsModule {}
