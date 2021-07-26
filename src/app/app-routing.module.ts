import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'template-forms',
    loadChildren: () =>
      import('./templates/templates.module').then((m) => m.TemplatesModule),
  },
  {
    path: 'reactive-forms',
    loadChildren: () =>
      import('./reactives/reactives.module').then((m) => m.ReactivesModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'template-forms',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
