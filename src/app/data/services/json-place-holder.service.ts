import { Injectable } from '@angular/core';
import { Todos } from '@data/interfaces/api/todos';
import { Observable, throwError } from 'rxjs';
import { JPH_TODOS } from '@data/constants/url-api';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {
  private urlEndPoint: string = JPH_TODOS;

  constructor(
    private http: HttpClient
  ){}

  errorHttp(error: HttpErrorResponse){
    let message: string = '';
    if(error.error instanceof ErrorEvent){
      message = error.error.message;
    }else{
      message = `Error code ${error.status}|Message: ${error.message}`
    }

    return throwError(message);
  }

  getTodosAll(): Observable<Todos[]>{
    return this.http.get<Todos[]>(this.urlEndPoint)
                    .pipe(catchError(this.errorHttp));
  }

  getTodosById(id: string): Observable<Todos>{
    return this.http.get<Todos>(this.urlEndPoint.concat(id));
  }
}
