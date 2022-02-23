import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {User} from "../../model/user";
import {SessionStorageService} from "../session-storage-service/session-storage.service";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8080/api/v2/user';
  private selectedUserSubject: Subject<User> = new ReplaySubject<User>(1);
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  currentIsLoggedIn = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient,
              private sessionStorageService: SessionStorageService) {
  }

  getUser(id: number) {
    const url = `${this.userUrl}/find/${id}`;

    // const token = this.sessionStorageService.getToken();
    // let tokenStr = 'Bearer ' + token;
    // const headers = new HttpHeaders().set('Authorization', tokenStr);

    return this.http.get<User>(url).pipe(
      tap(user => {
        this.selectedUserSubject.next(user);
      })
    );
  }

  setSelectedUser(user: User) {
    this.selectedUserSubject.next(user);
  }

  getSelectedUser(): Observable<User> {
    return this.selectedUserSubject.asObservable();
  }

  setIsLoggedIn(status: boolean) {
    this.isLoggedInSubject.next(status);
  }

  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
}
