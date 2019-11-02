import { UiShowComponent } from './../../pages/ui-components/ui-show/ui-show.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponentRoutingModule } from './ui-component-routing.module';


@NgModule({
  declarations: [UiShowComponent],
  imports: [
    CommonModule,
    UiComponentRoutingModule
  ]
})
export class UiComponentModule { }
