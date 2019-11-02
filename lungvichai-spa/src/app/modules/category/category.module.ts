import { CategoryEditComponent } from './../../pages/category/category-edit/category-edit.component';
import { CategoryListComponent } from './../../pages/category/category-list/category-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';


@NgModule({
  declarations: [CategoryListComponent, CategoryEditComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
