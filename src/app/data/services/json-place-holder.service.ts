import { Injectable } from '@angular/core';
import { Todos } from '@data/interfaces/api/todos';
import { Observable } from 'rxjs';
import { JPH_TODOS } from '@data/constants/url-api';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {
  private urlEndPoint: string = JPH_TODOS;

  constructor(
    private http: HttpClient
  ){}

  /*errorHttp(error: HttpErrorResponse){
    let message: string = '';
    if(error.error instanceof ErrorEvent){
      message = error.error.message;
    }else{
      message = `Error code ${error.status}|Message: ${error.message}`
    }

    return of({error: true, msg: message, data: null});
  }*/

  getTodosAll(): Observable<Todos[]>{
    return this.http.get<Todos[]>(this.urlEndPoint);
  }

  getTodosById(id: string): Observable<Todos>{
    return this.http.get<Todos>(this.urlEndPoint.concat(id));
  }
}
