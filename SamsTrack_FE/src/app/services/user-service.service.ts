import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  addUser(user:any):Observable<any>{
    const url="http://localhost:8091/user/register-user";
    return this.http.post(url,user).pipe(
      catchError(this.handleError)
    );

  }
  allUser():Observable<any>{
    const url="http://localhost:8091/user/get-all-user";
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );

  }
  public handleError(error:HttpErrorResponse){
    return throwError('Path not found....!');
  }
}
