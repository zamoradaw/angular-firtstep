import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class ApiClass{

  constructor(
    private httpClient: HttpClient
  ){ }

  errorHttp(error: HttpErrorResponse){
    let message: string = '';
    if(error.error instanceof ErrorEvent){
      message = error.error.message;
    }else{
      message = `Error code ${error.status}|Message: ${error.message}`
    }

    return throwError(message);
  }

}
