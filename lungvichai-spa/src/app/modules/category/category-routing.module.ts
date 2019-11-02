import { CategoryEditComponent } from './../../pages/category/category-edit/category-edit.component';
import { CategoryListComponent } from './../../pages/category/category-list/category-list.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: CategoryListComponent,
    children: [
      {
        path: "create",
        component: CategoryEditComponent
      },
      {
        path: "edit",
        component: CategoryEditComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
