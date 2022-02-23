import {Genre} from "./genre";
import {Person} from "./person";
import {Review} from "./review";

export class Movie {
  id: number;
  name: string;
  releaseDate: Date;
  runtime: string;
  director: string;
  writer: string;
  story: string;
  trailer: string;
  coverImg: string;
  albumImg: string;
  genres: Genre[];
  persons: Person[];
  reviews: Review[];

  constructor(
    id: number,
    name: string,
    releaseDate: Date,
    runtime: string,
    director: string,
    writer: string,
    story: string,
    trailer: string,
    coverImg: string,
    albumImg: string,
    genres: Genre[],
    persons: Person[],
    reviews: Review[]
  ) {
    this.id = id;
    this.name = name;
    this.releaseDate = releaseDate;
    this.runtime = runtime;
    this.director = director;
    this.writer = writer;
    this.story = story;
    this.trailer = trailer;
    this.coverImg = coverImg;
    this.albumImg = albumImg;
    this.genres = genres;
    this.persons = persons;
    this.reviews = reviews;
  }
}
