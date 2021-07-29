import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/;

  checkSameControlValues(
    controlName1: string,
    controlName2: string
  ): (formGroup: AbstractControl) => ValidationErrors | null {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control1Value = formGroup.get(controlName1)?.value;
      const control2Value = formGroup.get(controlName2)?.value;

      if (control1Value !== control2Value) {
        formGroup.get(controlName2)?.setErrors({ sameControlValues: false });
        return { sameControlValues: false };
      }

      formGroup.get(controlName2)?.setErrors(null);

      return null;
    };
  }
}
