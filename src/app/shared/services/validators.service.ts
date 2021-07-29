import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  checkSameControlValues(
    controlName1: string,
    controlName2: string
  ): (formGroup: AbstractControl) => ValidationErrors | null {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control1Value = formGroup.get(controlName1)?.value;
      const control2Value = formGroup.get(controlName2)?.value;

      console.log(control1Value, control2Value);

      if (control1Value !== control2Value) return { sameControlValues: false };

      return null;
    };
  }
}
