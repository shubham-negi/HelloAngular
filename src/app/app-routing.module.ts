import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CompanyComponent } from './company/company.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';
import { ReachUsComponent } from './reach-us/reach-us.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'about-us',
    component: AboutUsComponent,
    canActivate: [
      AuthGuardService
    ]
  }, {
    path: 'company',
    component: CompanyComponent
  }, {
    path: 'contact-us',
    component: ContactUsComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }, {
    path: 'reach-us',
    component: ReachUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
