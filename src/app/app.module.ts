import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CompanyComponent } from './company/company.component';
import { ProfileComponent } from './profile/profile.component';
import { ReachUsComponent } from './reach-us/reach-us.component';
import {NgxSkeletonLoaderModule} from 'node_modules/ngx-skeleton-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowErrorComponent } from './show-error/show-error.component';
// to use reactive forms module
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FakeApisComponent } from './fake-apis/fake-apis.component';
import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { OfflineComponent } from './offline/offline.component';
import { CommonInterceptor } from './shared/interceptors/common-interceptor';
import { LiveClassModule } from './live-class/live-class.module';
import { CoreComponentComponent } from './core-component/core-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    CompanyComponent,
    ProfileComponent,
    ReachUsComponent,
    ShowErrorComponent,
    FakeApisComponent,
    OfflineComponent,
    CoreComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    LiveClassModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
