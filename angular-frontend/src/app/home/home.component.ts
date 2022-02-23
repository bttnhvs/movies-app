import {Component, ElementRef, OnInit} from '@angular/core';
import {Movie} from "../model/movie";
import {Router} from "@angular/router";
import {MovieService} from "../services/movie-service/movie.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  movie: Movie | undefined;
  $event: any;

  constructor(private router: Router,
              private _eref: ElementRef,
              private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.currentMovies.subscribe(movies => {
      // @ts-ignore
      const allMovies = JSON.parse(movies);
      this.movies = [];
      allMovies.forEach((movie: Movie) => {
          if (movie.id <= 4) {
            this.movies?.push(movie);
          }
        }
      )
    });
  }

  openSelectedMovie(id: number) {
    this.movie = this.movies?.find(x => x.id === id);
    if (this.movie) {
      this.movieService.setMovieSub(this.movie);
      sessionStorage.setItem('movieId', JSON.stringify(this.movie.id));
    }
    this.router.navigate(['/movie/' + id]);
  }

  getUrl() {
    return "url(../assets/movie-time.jpg)";
  }

  onClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target)) {
    }
  }
}
