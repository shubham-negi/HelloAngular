import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineIdeComponent } from './online-ide/online-ide.component';
import { LiveClassComponent } from './live-class/live-class.component';

const routes: Routes = [
  {
    path: '',
    component: LiveClassComponent
  }, {
    path: 'editor',
    component: OnlineIdeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveRoutingModule { }
