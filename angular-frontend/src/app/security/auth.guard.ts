import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionStorageService} from "../services/session-storage-service/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private sessionStorage: SessionStorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn()) {
      return true;
    }
    /** Navigate to not login page as user is not authenticated */
    this.router.navigate(['/login']);
    return false;
  }

  public isLoggedIn(): boolean {
    let status = false;
    // todo this needs to be changed because can hack it easily
    // if (sessionStorage.getItem('isLoggedIn') === 'true') {
    if (this.sessionStorage.isLoggedIn() === true) {
      status = true;
    } else {
      status = false;
    }
    return status;
  }
}
