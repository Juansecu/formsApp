export interface Person {
  firstName: string;
  lastName: string;
  favoriteGames: FavoriteGames[];
}

export interface FavoriteGames {
  id: number;
  name: string;
}
