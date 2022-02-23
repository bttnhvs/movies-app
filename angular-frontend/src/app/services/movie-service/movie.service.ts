import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, ReplaySubject, Subject} from "rxjs";
import {Movie} from "../../model/movie";
import {tap} from "rxjs/operators";
import {SessionStorageService} from "../session-storage-service/session-storage.service";



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl = 'http://localhost:8080/api/v1/movie';

  private movieSubject: Subject<Movie> = new ReplaySubject<Movie>(1);
  currentMovie = this.movieSubject.asObservable();


  private moviesSubject: Subject<Movie[]> = new ReplaySubject<Movie[]>(1);
  currentMovies = this.moviesSubject.asObservable();

  constructor(private http: HttpClient) {
  };

  /** GET MOVIES */
  getMovies() {
    const url = `${this.movieUrl}/all`;

    // const token = this.sessionStorageService.getToken();
    // let tokenStr = 'Bearer ' + token;
    // const headers = new HttpHeaders().set('Authorization', tokenStr);

    return this.http.get<any[]>(url);
  }

  /** GET MOVIE */
  getMovie(id: number) {
    const url = `${this.movieUrl}/find/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(movie => {
        // @ts-ignore
        const parsedMovie = JSON.parse(movie)
        this.movieSubject.next(parsedMovie);
      })
    );
  }

  /** ADD NEW MOVIE */
  addMovie(newMovie: any): Observable<any> {
    const url = `${this.movieUrl}/add`;
    return this.http.post(url, newMovie);
  }

  /** EDIT MOVIE*/
  editMovie(editedMovie: any): Observable<any> {
    const url = `${this.movieUrl}/update`;
    return this.http.put(url, editedMovie);
  }

  /** DELETE MOVIE */
  deleteMovie(id: number): Observable<any> {
    const url = `${this.movieUrl}/delete/${id}`;
    return this.http.delete(url);
  }

  setMovieSub(movie: Movie) {
    this.movieSubject.next(movie);
  }

  getMovieSub(): Observable<Movie> {
    return this.movieSubject.asObservable();
  }

  setMoviesSub(movies: Movie[] | undefined) {
    this.moviesSubject.next(movies);
  }

  getMoviesSub(): Observable<Movie[]> {
    return this.moviesSubject.asObservable();
  }
}
