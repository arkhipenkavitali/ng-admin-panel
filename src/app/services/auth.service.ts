import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string){
    localStorage.setItem('token-ngg', token);
  }

  getToken(){
    return localStorage.getItem('token-ngg');
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  login(userInfo: {email: string, password: string}): Observable<string | boolean> {
    if(userInfo.email === 'qwe@qwe' && userInfo.password === 'Qwerty321') {
      this.setToken('adminHere')
      return of(true);
    }
    return throwError(() => new Error('Failed login'));
  }

  logout(){
    this.router.navigate(['login'])
  }
}
