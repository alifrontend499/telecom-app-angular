import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'step-one', pathMatch: 'full' },
  {
    path: 'step-one',
    loadChildren: () => import('./step-one/step-one.module').then(m => m.StepOnePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceDetailsPageRoutingModule { }
