import {  AuthGuard } from '../_helpers/auth.guard';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routeConstants = [LoginComponent, RegisterComponent,HomeComponent];
