import {Movie} from "./movie";

export class User {
  id: number;
  name: string;
  username: string;
  password: string;
  email?: string;
  userImg?: string;
  watchList?: Movie[];
  favouriteMovies?: Movie[]

  constructor(
    id: number,
    name: string,
    username: string,
    password: string,
    email: string,
    userImg: string,
    watchList: Movie[],
    favouriteMovies: Movie[]
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.userImg = userImg;
    this.watchList = watchList;
    this.favouriteMovies = favouriteMovies;
  }
}
