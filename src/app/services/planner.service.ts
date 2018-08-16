import { PlannerModel } from './model/plannerModel';
import { ResponseModel } from "./ResponseModel";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PlannerService {
  private url = "https://tm-recipes-api.herokuapp.com/recipes";

  //private url="http://localhost:8080/recipes";
  constructor(private http: HttpClient) {}

  public savePlanner$(planner: PlannerModel): Observable<any> {
    return this.http.post(this.url, planner);
  }
  
}
