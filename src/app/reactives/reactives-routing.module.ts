import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicFormsComponent } from './components/basic-forms/basic-forms.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';
import { SwitchFormsComponent } from './components/switch-forms/switch-forms.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic-forms',
        component: BasicFormsComponent,
      },
      {
        path: 'dynamic-forms',
        component: DynamicFormsComponent,
      },
      {
        path: 'switch-forms',
        component: SwitchFormsComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'basic-forms',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ReactivesRoutingModule {}
