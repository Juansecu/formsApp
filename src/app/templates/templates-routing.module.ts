import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicFormsComponent } from './components/basic-forms/basic-forms.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';

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
        path: '**',
        redirectTo: 'basic-forms',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TemplatesRoutingModule {}
