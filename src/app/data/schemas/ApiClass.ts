import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

export class ApiClass{

  constructor(
    protected http: HttpClient
  ){ }

  errorHttp(error: HttpErrorResponse){
    let message: string = '';
    if(error.error instanceof ErrorEvent){
      message = error.error.message;
    }else{
      message = `Error code ${error.status}|Message: ${error.message}`
    }

    return of({error: true, msg: message, data: null});
  }
}
