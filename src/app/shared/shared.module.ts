import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { NoDataComponent } from './components/errors/no-data/no-data.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor';

@NgModule({
  declarations: [
    NoDataComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class SharedModule { }
