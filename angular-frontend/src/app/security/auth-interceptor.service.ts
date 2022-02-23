import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SessionStorageService} from "../services/session-storage-service/session-storage.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private sessionStorageService: SessionStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.sessionStorageService.getToken();
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);

    if (token) {
      const authReq = req.clone({headers, responseType: 'text' as 'json'});
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
