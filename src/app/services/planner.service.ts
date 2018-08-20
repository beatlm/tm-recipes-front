import { PlannerModel } from './model/plannerModel';
import { ResponseModel } from "./ResponseModel";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PlannerService {
  private url = "https://tm-recipes-api.herokuapp.com/planner";

  //private url="http://localhost:8080/recipes";
  constructor(private http: HttpClient) {}

  public savePlanner$(planner: PlannerModel): Observable<any> {
    return this.http.post(this.url, planner);
  }

  public getPlannerList$(): Observable<PlannerModel[]> {
    return this.http.get<PlannerModel[]>(this.url).map((result: any) => {
      console.log(result.content); //<--it's an object
      if (result.page.totalElements > 0) {
        return result.content; //just return "recipes"
      } else {
        return null; //TODO ¿Como hacer que no devuelva nada si no hay hnada?
      }
    });
  }
  
}
