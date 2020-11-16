import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from '@layout/page404/page404.component';
import { WelcomeComponent } from '@layout/welcome/welcome.component';

import { LC_DELECTUS, LC_PROOF } from '@data/constants/loadchildren-module';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'delectus', loadChildren: LC_DELECTUS},
  {path: 'proof', loadChildren: LC_PROOF},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
