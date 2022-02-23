import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/movie";
import {Router} from "@angular/router";
import {Genre} from "../model/genre";
import {GenresService} from "../services/genre-service/genres.service";
import {MovieService} from "../services/movie-service/movie.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  movies: Movie[] | undefined;
  filteredMovies: Movie[] | undefined;
  movie: Movie | undefined;
  genres: Genre[] | undefined;
  noMovieMessage: string | undefined;
  selectedGenre: any;

  constructor(private movieService: MovieService,
              private genreService: GenresService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.movieService.currentMovies.subscribe(movies => {
      // @ts-ignore
      this.movies = JSON.parse(movies);
      this.filteredMovies = this.movies;
    });
    this.genreService.currentGenres.subscribe(genres => {
        // @ts-ignore
        this.genres = JSON.parse(genres);
      });
  }

  openSelectedMovie(id: number) {
    this.movie = this.movies?.find(x => x.id === id);
    if(this.movie) {
      this.movieService.setMovieSub(this.movie);
      this.router.navigate(['/movie/' + id]);
    }
  }

  getUrl() {
    return "url(../assets/movie-time.jpg)";
  }

  selectGenre(selectedGenre: string) {
    this.selectedGenre = selectedGenre;
    const sortedMovies: Movie[] = [];
    this.filteredMovies = [];
    if (selectedGenre === 'allGenres') {
      this.filteredMovies = this.movies;
      this.noMovieMessage = '';
    } else {
      this.movies?.forEach(movie => {
        movie.genres.forEach(genre => {
          if (genre.name === selectedGenre) {
            sortedMovies.push(movie);
            this.filteredMovies = sortedMovies;
            this.noMovieMessage = '';
          }
        });
      });
      if (this.filteredMovies.length <= 0) {
        this.noMovieMessage = 'No movie has this genre.';
      }
    }
  }
}
