import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic-forms',
  templateUrl: './basic-forms.component.html',
  styles: [],
})
export class BasicFormsComponent {
  /*form = new FormGroup({
    product: new FormControl(''),
    price: new FormControl(),
    stock: new FormControl(),
  });*/

  form = this.formBuilder.group({
    product: ['', [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    stock: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  addProduct(): void {
    console.log(this.form.value);
    this.form.reset();
  }

  checkControl(field: string): boolean | null {
    return (
      this.form.controls[field].errors && this.form.controls[field].touched
    );
  }
}
