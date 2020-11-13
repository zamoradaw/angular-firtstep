import { NgModule } from '@angular/core';

import { DelectusRoutingModule } from './delectus-routing.module';
import { DelectusListComponent } from './delectus-list/delectus-list.component';
import { DelectusDetailComponent } from './delectus-detail/delectus-detail.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    DelectusListComponent,
    DelectusDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DelectusRoutingModule,
  ]
})
export class DelectusModule { }
