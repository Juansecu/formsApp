import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    email: [
      '',
      [Validators.required, Validators.pattern(/[a-z]+@[a-z]+.[a-z]{2,4}/)],
    ],
    username: ['', [Validators.required, Validators.minLength(5)]],
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)],
    ],
    verifyPassword: ['', [Validators.required]],
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  checkControl(control: string): boolean {
    return (
      this.form.controls[control]?.invalid &&
      this.form.controls[control]?.touched
    );
  }
}
