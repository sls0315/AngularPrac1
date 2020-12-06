import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from '../Models/students';
import {observable, throwError} from 'rxjs';
import {retry,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  get(url:any){
    return this.http.get(url);
  }

  create(url:any ,data:Student){
    return this.http.post(url,data,this.httpOptions);
  }

  delete(url:any){
    return this.http.delete(url);
  }
}
