import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  private url = "https://tm-recipes-api.herokuapp.com/createFacebookAuthorization";
  private options = {responseType: 'text' as 'text'};//Para no leer un json

  //private url="http://localhost:8080/createFacebookAuthorization";
  constructor(private http: HttpClient) {}

  public getLogin$(): Observable<String> {
    return this.http.get(this.url,this.options).map((result: any) => {
      console.log(result); //<--it's an object
      return result; 
    });
  }

  
}
