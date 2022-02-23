import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PersonService} from "./services/person-service/person.service";
import {GenresService} from "./services/genre-service/genres.service";
import {UserService} from "./services/user-service/user.service";
import {MovieService} from "./services/movie-service/movie.service";
import {Movie} from "./model/movie";
import {Genre} from "./model/genre";
import {Person} from "./model/person";
import {User} from "./model/user";

const httpHeaders = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  movieId: number = 1;
  personId: number = 1;
  userId: number = 1;

  constructor(private http: HttpClient,
              private personService: PersonService,
              private genreService: GenresService,
              private movieService: MovieService,
              private userService: UserService) {
  }

  ngOnInit(): void{
    const movieId = sessionStorage.getItem('movieId');
    if (movieId != null) {
      this.movieId = JSON.parse(movieId);
    }
    const personId = sessionStorage.getItem('personId');
    if (personId != null) {
      this.personId = JSON.parse(personId);
    }

    const IsLoggedIn = sessionStorage.getItem('IsLoggedIn');
    if (IsLoggedIn != null) {
      const isLoggedIn = JSON.parse(IsLoggedIn);
      this.userService.setIsLoggedIn(isLoggedIn);
    }

    this.userService.currentIsLoggedIn.subscribe((status) => {
        console.log(status);
        if(status) {
          this.getMovies();
          this.getMovie();
          this.getGenres();
          this.getPersons();
          this.getPerson();
        }
      }
    );
  }

  getMovies(){
    this.movieService.getMovies().subscribe(movies => {
      this.movieService.setMoviesSub(movies);
    });
  }

  getGenres(){
    this.genreService.getGenres().subscribe(genres => {
      this.genreService.setGenres(genres);
    });
  }

  getPersons(){
    this.personService.getPersons().subscribe(persons => {
      this.personService.setPersonsSub(persons);
    });
  }

  getPerson(){
    this.personService.getPerson(this.personId).subscribe(person => {
      // @ts-ignore
      const parsedPerson = JSON.parse(person)
      this.personService.setPersonSub(parsedPerson);
    });
  }

  getMovie(){
    this.movieService.getMovie(this.movieId).subscribe(movie => {
      // @ts-ignore
      const parsedMovie = JSON.parse(movie)
      this.movieService.setMovieSub(parsedMovie);
    });
  }
}
