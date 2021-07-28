export interface Person {
  firstName: string;
  lastName: string;
  favoriteGames: FavoriteGame[];
}

export interface FavoriteGame {
  id: number;
  name: string;
}
