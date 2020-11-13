import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelectusDetailComponent } from './delectus-detail/delectus-detail.component';
import { DelectusListComponent } from './delectus-list/delectus-list.component';

const routes: Routes = [
  {path: 'list', component: DelectusListComponent},
  {path: ':id', component: DelectusDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelectusRoutingModule { }
