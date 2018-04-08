import { RecipeModel } from './RecipeModel';
import { ResponseModel } from './responseModel';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class RecipesService {
  private url = "https://tm-recipes-api.herokuapp.com/recipes" ;

  //private url="http://localhost:8080/recipes";
  constructor(private http: HttpClient) {}

  public getRecipesList$(): Observable<RecipeModel[]> {
    return this.http.get<RecipeModel[]>(this.url);
  }
  
 
  public saveRecipe$(recipe:RecipeModel):Observable<any> {
    return this.http.post(this.url,recipe);
  }
  public deleteRecipe$(id:string):Observable<any>{
    return this.http.delete(this.url+"/"+id);
  }


}
