import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switch-forms',
  templateUrl: './switch-forms.component.html',
  styles: [],
})
export class SwitchFormsComponent {
  form = this.formBuilder.group({
    gender: ['', [Validators.required, Validators.pattern(/Male|Female/)]],
    notifications: [true],
    tacs: [false, Validators.requiredTrue],
  });
  settings = {
    gender: '',
    notifications: false,
    termsAndConditions: false,
  };

  constructor(private readonly formBuilder: FormBuilder) {}

  saveSettings(): void {
    this.settings = { ...this.form.value };
  }
}
