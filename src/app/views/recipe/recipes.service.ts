import { RecipeModel } from './recipeModel';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class RecipesService {

  private recipes: RecipeModel[] = [];
  private url = "https://vast-eyrie-22923.herokuapp.com/recipes" ;
  //private url="http://localhost:8080/recipes";
  constructor(private http: HttpClient) {}

 /* public getNumberOfRecipes$(): number {
    return this.recipes.length;
  }*/
  public getRecipesList$(): Observable<RecipeModel[]> {
    return this.http.get<RecipeModel[]>(this.url);
  }
  
  
  public saveRecipe$(recipe: RecipeModel) {
    recipe.name = new Date().getTime().toString();
    this.recipes.push(recipe);
  }
  public deleteOperation$(recipe: RecipeModel) {
    const index = this.recipes.indexOf(recipe);
    this.recipes.splice(index, 1);
  }

}
