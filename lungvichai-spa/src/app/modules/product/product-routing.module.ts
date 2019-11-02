import { ProductEditComponent } from "./../../pages/product/product-edit/product-edit.component";
import { ProductListComponent } from "./../../pages/product/product-list/product-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: ProductListComponent,
    children: [
      {
        path: "create",
        component: ProductEditComponent
      },
      {
        path: "edit",
        component: ProductEditComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
