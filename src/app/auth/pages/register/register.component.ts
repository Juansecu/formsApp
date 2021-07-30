import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsersService } from 'src/app/shared/services/users.service';
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
        [this.usersService],
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
    private readonly usersService: UsersService,
    private readonly validatorsService: ValidatorsService
  ) {}

  ngOnInit(): void {}

  checkControlValue(controlName: string, errorName: string): boolean {
    return (
      this.form.controls[controlName]?.errors?.[errorName] &&
      this.form.controls[controlName]?.touched
    );
  }
}
