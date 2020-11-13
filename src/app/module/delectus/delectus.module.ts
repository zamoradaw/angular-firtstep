import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelectusRoutingModule } from './delectus-routing.module';
import { DelectusListComponent } from './delectus-list/delectus-list.component';
import { DelectusDetailComponent } from './delectus-detail/delectus-detail.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [DelectusListComponent, DelectusDetailComponent],
  imports: [
    CommonModule,
    DelectusRoutingModule,
    SharedModule,
  ]
})
export class DelectusModule { }
