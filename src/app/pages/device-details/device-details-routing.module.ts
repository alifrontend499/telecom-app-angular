import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/_services/auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'step-one', pathMatch: 'full', canActivate: [AuthGuardService] },
  {
    path: 'step-one',
    loadChildren: () => import('./step-one/step-one.module').then(m => m.StepOnePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'step-two',
    loadChildren: () => import('./step-two/step-two.module').then(m => m.StepTwoPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'step-three',
    loadChildren: () => import('./step-three/step-three.module').then(m => m.StepThreePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'step-four',
    loadChildren: () => import('./step-four/step-four.module').then(m => m.StepFourPageModule),
    canActivate: [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceDetailsPageRoutingModule { }
