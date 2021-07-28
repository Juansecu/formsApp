import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-forms',
  templateUrl: './switch-forms.component.html',
  styles: [],
})
export class SwitchFormsComponent {
  termsAndConditions = false;
  person = {
    gender: '',
    notifications: false,
  };
}
