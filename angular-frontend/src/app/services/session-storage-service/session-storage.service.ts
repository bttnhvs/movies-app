import {Injectable} from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const ISLOGGEDIN_KEY = 'IsLoggedIn';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() {
  }

  public setLogout() {
    window.sessionStorage.clear();
  }

  /** TOKEN */
  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return <string>sessionStorage.getItem(TOKEN_KEY);
  }

  /** IS LOGGED IN */
  public setIsLoggedIn(isLoggedIn: string) {
    window.sessionStorage.removeItem(ISLOGGEDIN_KEY);
    window.sessionStorage.setItem(ISLOGGEDIN_KEY, isLoggedIn);
  }

  /** USER NAME*/
  public setUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return <string>sessionStorage.getItem(USERNAME_KEY);
  }

  /** IS LOGGED IN */
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

}
