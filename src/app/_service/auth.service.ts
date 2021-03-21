import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalVariable} from '../_helpers/variable.service';

const AUTH_API = GlobalVariable.API_URL + 'auth/';
const HttpOptions = GlobalVariable.httpOptions;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password
    }, HttpOptions);
  }
  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username: user.value.username,
      password: user.value.password,
      firstname: user.value.firstname,
      lastname: user.value.lastname
    }, HttpOptions);
  }

}
