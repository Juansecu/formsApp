import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styles: [],
})
export class DynamicFormsComponent {
  form = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: [, [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.formBuilder.array([], [Validators.required]),
  });

  newFavoriteGame = new FormControl('', Validators.required);

  get favoriteGames(): FormArray {
    return this.form.get('favoriteGames') as FormArray;
  }

  constructor(private readonly formBuilder: FormBuilder) {}

  addFavoriteGame(): void {
    if (this.newFavoriteGame.invalid) return;

    this.favoriteGames.push(new FormControl(this.newFavoriteGame.value));
    this.newFavoriteGame.reset();
  }

  checkControl(control: string): boolean | null {
    return (
      this.form.controls[control].errors && this.form.controls[control].touched
    );
  }

  removeFavoriteGame(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  saveData(): void {
    console.log(this.form.value);
  }
}
