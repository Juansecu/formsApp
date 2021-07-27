import { Component, OnInit } from '@angular/core';

import { Route } from '../../typings/Route';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [],
})
export class SidemenuComponent {
  reactiveRoutes: Route[] = [
    {
      text: 'Basic Forms',
      route: 'reactive-forms/basic-forms',
    },
    {
      text: 'Dynamic Forms',
      route: 'reactive-forms/dynamic-forms',
    },
    {
      text: 'Switch Forms',
      route: 'reactive-forms/switch-forms',
    },
  ];
  templateRoutes: Route[] = [
    {
      text: 'Basic Forms',
      route: 'template-forms/basic-forms',
    },
    {
      text: 'Dynamic Forms',
      route: 'template-forms/dynamic-forms',
    },
    {
      text: 'Switch Forms',
      route: 'template-forms/switch-forms',
    },
  ];
}
