import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {GlobalVariable} from '../_helpers/variable.service';

const API_URL = GlobalVariable.API_URL;
const httpOptions = GlobalVariable.httpOptions;

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {
  }

  GetGetedTask(): Observable<any> {
    return this.http.get(API_URL + 'task/get');
  }

  getSendTasks(): Observable<any> {
    return this.http.get(API_URL + 'task/send');
  }

  saveTask(credentials): Observable<any> {
    return this.http.post(API_URL + 'task/save', {
      textHeader: credentials.textHeader,
      textBody: credentials.textBody,
      dateStart: credentials.dateStart,
      dateEnd: credentials.dateEnd,
      workVariant: credentials.workVariant,
      useIdList: credentials.useIdList
    }, httpOptions);
  }
  changeTask(credentials): Observable<any>{
    return this.http.post(API_URL + 'task/change', {
      id: credentials.id
    }, httpOptions);
  }
}
