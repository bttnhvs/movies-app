import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/movie";
import {Router} from "@angular/router";
import {MovieService} from "../services/movie-service/movie.service";
import {MatDialog} from '@angular/material/dialog';
import {DialogAddMovieComponent} from "../dialogs/dialog-add-movie/dialog-add-movie.component";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] | undefined;
  movie: Movie | undefined;

  constructor(private router: Router,
              private movieService: MovieService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.movieService.currentMovies.subscribe((movies: Movie[]) => {
        // @ts-ignore
        this.movies = JSON.parse(movies);
      }
    );
  }

  openSelectedMovie(id: number) {
    // @ts-ignore
    this.movie = this.movies?.find(x => x.id === id);
    if (this.movie) {
      this.movieService.setMovieSub(this.movie);
      sessionStorage.setItem('movieId', JSON.stringify(this.movie?.id));
      this.router.navigate(['/movie/' + id]);
    }
  }

  openAddMovieDialog(): void {
    const dialogRef = this.dialog.open(DialogAddMovieComponent, {
      width: '1000px',
      data: {movie: this.movie, movies: this.movies},
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.movies?.push(res.newMovie);
      }
    });
  }
}
