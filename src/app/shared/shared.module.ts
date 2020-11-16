import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '@shared/components/cards/cards.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MoneyComponent } from './components/money/money.component';

@NgModule({
  declarations: [
    CardsComponent,
    PaginationComponent,
    MoneyComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    CardsComponent,
    PaginationComponent,
    MoneyComponent,

    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule { }
