import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Review} from "../../model/review";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionStorageService} from "../session-storage-service/session-storage.service";

const httpHeaders = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviewUrl =  'http://localhost:8080/api/v1/review/add';
  constructor(private http: HttpClient,   private sessionStorageService: SessionStorageService) { }


  // getReviews(){
  //   this.httpService.getMovies().subscribe(movies => {
  //     this.movies = movies;
  //     this.dataService.changeMovies(this.movies);
  //   });
  // }

  /** ADD new review */
  addReview(review:Review): Observable<any> {

    const token = this.sessionStorageService.getToken();
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);

    const url = `${this.reviewUrl}`;
    return this.http.post(url, review, {headers, responseType: 'text' as 'json' });
  }
}
