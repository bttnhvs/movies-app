export class Review {
  id: number;
  review: string;
  // creationDate: Date;
  userId: number;
  movieId: number;

  constructor(
    id: number,
    review: string,
    // creationDate: Date,
    userId: number,
    movieId: number,
  ) {
    this.id = id;
    this.review = review;
    // this.creationDate = reviewDate;
    this.userId = userId;
    this.movieId = movieId;
  }
}
