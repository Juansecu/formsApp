import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[minimum][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinimumDirective,
      multi: true,
    },
  ],
})
export class MinimumDirective implements Validator {
  @Input() minimum!: number | string;

  constructor() {}

  validate(control: FormControl): { minimum: boolean } | null {
    return control.value < this.minimum ? { minimum: true } : null;
  }
}
