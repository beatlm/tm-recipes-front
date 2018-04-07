import { ResponseModel } from './responseModel';
import { RecipeModel } from './recipeModel';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class RecipesService {
  private url = "https://tm-recipes-api.herokuapp.com/recipes" ;

  //private url="http://localhost:8080/recipes";
  constructor(private http: HttpClient) {}

 /* public getNumberOfRecipes$(): number {
    return this.recipes.length;
  }*/
  public getRecipesList$(): Observable<ResponseModel<RecipeModel>[]> {
    return this.http.get<ResponseModel<RecipeModel>[]>(this.url);
  }
  
 
  public saveRecipe$(recipe:RecipeModel):Observable<any> {
    return this.http.post(this.url,recipe);
  }


}
