import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.formBuilder.group(
    {
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorsService.emailPattern),
        ],
      ],
      username: ['', [Validators.required, Validators.minLength(5)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
      verifyPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
    },
    {
      validators: this.validatorsService.checkSameControlValues(
        'password',
        'verifyPassword'
      ),
    }
  );

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly validatorsService: ValidatorsService
  ) {}

  ngOnInit(): void {}

  checkControl(control: string): boolean {
    return (
      this.form.controls[control]?.invalid &&
      this.form.controls[control]?.touched
    );
  }
}
