import { PlannerModel } from './model/plannerModel';
import { ResponseModel } from "./ResponseModel";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import {DatePipe} from '@angular/common';


@Injectable()
export class PlannerService {
  private findUrl = "https://tm-recipes-api.herokuapp.com/planner/search/findByDate?date=";
  private createUrl = "https://tm-recipes-api.herokuapp.com/planner";

  //private url="http://localhost:8080/recipes";
  constructor(private http: HttpClient,
    public datepipe: DatePipe) {}

  public savePlanner$(planner: PlannerModel): Observable<any> {
    return this.http.post(this.createUrl, planner);
  }

  public getPlannerList$(): Observable<PlannerModel[]> {

    var hoy=this.datepipe.transform(Date.now(), 'yyyy/MM/dd');
  
    return this.http.get<PlannerModel[]>(this.findUrl+hoy).map((result: any) => {
      console.log(result.content); //<--it's an object
      if (result.content.length > 0) {
        return result.content; //just return "recipes"
      } else {
        return null; //TODO ¿Como hacer que no devuelva nada si no hay hnada?
      }
    });
  }
  
}
