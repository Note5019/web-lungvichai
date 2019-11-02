import { ProductEditComponent } from "./../../pages/product/product-edit/product-edit.component";
import { ProductListComponent } from "./../../pages/product/product-list/product-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductRoutingModule } from "./product-routing.module";

@NgModule({
  declarations: [ProductListComponent, ProductEditComponent],
  imports: [CommonModule, ProductRoutingModule]
})
export class ProductModule {}
