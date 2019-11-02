import { StockInComponent } from './../../pages/transaction/stock-in/stock-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: StockInComponent,
    // children: [
    //   {
    //     path: "create",
    //     component: CategoryEditComponent
    //   },
    //   {
    //     path: "edit",
    //     component: CategoryEditComponent
    //   }
    // ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
