import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos } from '@data/interfaces/api/todos';
import { Observable } from 'rxjs';
import { JPH_TODOS } from '@data/constants/url-api';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {
  private urlEndPoint: string = JPH_TODOS;

  constructor(
    private http: HttpClient
  ) { }

  getTodosAll(): Observable<Todos[]>{
    return this.http.get<Todos[]>(this.urlEndPoint);
  }

  getTodosById(id: string): Observable<Todos>{
    return this.http.get<Todos>(this.urlEndPoint.concat(id));
  }
}
