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
        // loadChildren: "./pages/ui-components/ui-components.module#UiComponentsModule"
        loadChildren: () =>
          import("../pages/ui-components/ui-components.module").then(
            m => m.UiComponentsModule
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
