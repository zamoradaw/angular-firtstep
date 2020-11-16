import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImplementOnchageComponent } from './implement-onchage/implement-onchage.component';

const routes: Routes = [
  {path: 'onchage', component: ImplementOnchageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProofRoutingModule { }
