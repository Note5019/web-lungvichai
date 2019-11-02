import { HomeComponent } from "./../pages/home/home.component";
import { ContentComponent } from "./content/content.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: ContentComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "ui",
        loadChildren: () =>
          import("../modules/ui-component/ui-component.module").then(
            m => m.UiComponentModule
          )
      },
      {
        path: "master/products",
        loadChildren: () =>
          import("../modules/product/product.module").then(m => m.ProductModule)
      },
      {
        path: "master/categories",
        loadChildren: () =>
          import("../modules/category/category.module").then(
            m => m.CategoryModule
          )
      },
      {
        path: "/transactions",
        loadChildren: () =>
          import("../modules/transaction/transaction.module").then(
            m => m.TransactionModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
