import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProofRoutingModule } from './proof-routing.module';
import { ImplementOnchageComponent } from './implement-onchage/implement-onchage.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ImplementOnchageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProofRoutingModule
  ]
})
export class ProofModule { }
