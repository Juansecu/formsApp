import { Component, OnInit } from '@angular/core';

import { FavoriteGame, Person } from 'src/app/shared/typings/Person';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styles: [],
})
export class DynamicFormsComponent implements OnInit {
  favoriteGame!: string;

  person: Person = {
    firstName: '',
    lastName: '',
    favoriteGames: [],
  };

  constructor() {}

  ngOnInit(): void {}

  addFavoriteGame(): void {
    const newGame: FavoriteGame = {
      id: this.person.favoriteGames.length + 1,
      name: this.favoriteGame,
    };

    this.person.favoriteGames.push({ ...newGame });
    this.favoriteGame = '';
  }

  removeFavoriteGame(index: number): void {
    this.person.favoriteGames.splice(index, 1);
  }

  saveData(): void {}
}
