import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from '../app/components/signup/signup.component';
import {LoginComponent} from '../app/components/login/login.component';
import {PlansComponent} from '../app/components/plans/plans.component';


 const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'plans', component: PlansComponent },
//   { path: 'about', component: AboutComponent },
//   { path: '**', redirectTo: '' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

