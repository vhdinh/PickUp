import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';

export const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
