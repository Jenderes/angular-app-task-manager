import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {GlobalVariable} from '../_helpers/variable.service';

const API_URL = GlobalVariable.API_URL;
const httpOptions = GlobalVariable.httpOptions;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient ) { }

  getContacts(): Observable <any> {
    return this.http.get(API_URL + 'user/contacts');
  }
  getStatistic(): Observable<any> {
    return this.http.get(API_URL + 'user/statistic');
  }
  getProfileContact(userId: number): Observable<any> {
    return this.http.get(API_URL + 'user/get/' + userId);
  }
}
