import { StockInComponent } from './../../pages/transaction/stock-in/stock-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';


@NgModule({
  declarations: [StockInComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
