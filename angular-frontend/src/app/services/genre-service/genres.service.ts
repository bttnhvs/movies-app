import {Injectable} from '@angular/core';
import {ReplaySubject, Subject} from "rxjs";
import {Genre} from "../../model/genre";
import {HttpClient} from "@angular/common/http";
import {SessionStorageService} from "../session-storage-service/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  // private cast = new BehaviorSubject<Movie[]>([]);
  private genreUrl = 'http://localhost:8080/api/v1/genre';

  private genres: Subject<Genre[]> = new ReplaySubject<Genre[]>(1);
  currentGenres = this.genres.asObservable();

  private selectedGenre: Subject<Genre> = new ReplaySubject<Genre>(1);
  currentSelectedGenre = this.selectedGenre.asObservable();

  constructor(private http: HttpClient) {
  }

  getGenres() {
    const url = `${this.genreUrl}/all`;
    return this.http.get<Genre[]>(url);
  }

  setGenres(genre: Genre[] | undefined) {
    this.genres.next(genre);
  }

  setGenre(selectedGenre: Genre | undefined) {
    this.selectedGenre.next(selectedGenre);
  }
}
