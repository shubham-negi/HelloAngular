import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineIdeComponent } from './online-ide/online-ide.component';
import { LiveClassComponent } from './live-class/live-class.component';
import { LiveRoutingModule } from './live-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OnlineIdeComponent, LiveClassComponent],
  imports: [
    CommonModule,
    FormsModule,
    LiveRoutingModule
  ],
  exports: [
    OnlineIdeComponent,
    LiveClassComponent
  ]
})
export class LiveClassModule { }
