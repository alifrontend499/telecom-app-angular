import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuardService } from './_services/auth/login-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule), data: { title: 'Home' }, canActivate: [LoginGuardService] },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule),
    data: { title: 'Login' },
    canActivate: [LoginGuardService]
  },
  {
    path: 'device-details',
    loadChildren: () => import('./pages/device-details/device-details.module').then(m => m.DeviceDetailsPageModule),
    data: { title: 'Device Details' }
  },
  {
    path: 'user-details',
    loadChildren: () => import('./pages/user-details/user-details.module').then(m => m.UserDetailsPageModule),
    data: { title: 'User Details' }
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/otp/otp.module').then(m => m.OtpPageModule),
    data: { title: 'Otp' }
  },
  {
    path: 'added-successfully',
    loadChildren: () => import('./pages/added-successfully/added-successfully.module').then(m => m.AddedSuccessfullyPageModule),
    data: { title: 'Success' }
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
