import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '@shared/components/cards/cards.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CardsComponent,
    RouterModule
  ]
})
export class SharedModule { }
