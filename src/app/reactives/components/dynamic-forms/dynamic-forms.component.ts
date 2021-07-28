import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styles: [],
})
export class DynamicFormsComponent {
  form = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: [, [Validators.required, Validators.minLength(3)]],
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  checkControl(control: string): boolean | null {
    return (
      this.form.controls[control].errors && this.form.controls[control].touched
    );
  }

  saveData(): void {
    console.log(this.form.value);
  }
}
