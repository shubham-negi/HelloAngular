import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { NoDataComponent } from './components/errors/no-data/no-data.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';

@NgModule({
  declarations: [
    NoDataComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class SharedModule { }
