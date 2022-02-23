import {Movie} from "./movie";

export class Person {
  id: number;
  name: string;
  birthDate: Date;
  nationality: string;
  personImg: string;
  biography: string;
  movies: Movie[];

  constructor(
    id: number,
    name: string,
    birthDate: Date,
    nationality: string,
    personImg: string,
    biography: string,
    movies: Movie[]
  ) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.nationality = nationality;
    this.personImg = personImg;
    this.biography = biography;
    this.movies = movies;
  }
}
