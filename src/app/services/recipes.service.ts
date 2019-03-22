import { RecipeModel } from "./model/RecipeModel";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class RecipesService {
  //private url = "https://tm-recipes-api.herokuapp.com/recipes";
  private url = "http://51.15.227.239:8080/recipes";

  private find="/search/buscarPorTag?tag="

  //private url="http://localhost:8080/recipes";
  constructor(private http: HttpClient) {}

  public getRecipesList$(): Observable<RecipeModel[]> {
    return this.http.get<RecipeModel[]>(this.url).map((result: any) => {
      console.log(result.content); //<--it's an object
      if (result.page.totalElements > 0) {
        return result.content; //just return "recipes"
      } else {
        return null; //TODO ¿Como hacer que no devuelva nada si no hay hnada?
      }
    });
  }

  public getRecipesListByTag$(tag:String): Observable<RecipeModel[]> {
    return this.http.get<RecipeModel[]>(this.url+this.find+tag).map((result: any) => {
      console.log(result.content); //<--it's an object
      if (result.content[0].id!=null) {//TODO corregir back kpara que devuelva 204
        return result.content; //just return "recipes"
      } else {
        return null; //TODO ¿Como hacer que no devuelva nada si no hay hnada?
      }
    });
  }

  public saveRecipe$(recipe: RecipeModel): Observable<any> {
    return this.http.post(this.url, recipe);
  }
  public editRecipe$(recipe: RecipeModel, id:string): Observable<any> {
    return this.http.patch(this.url+ "/" + id, recipe);
  }
  public deleteRecipe$(id: string): Observable<any> {
    return this.http.delete(this.url + "/" + id);
  }
  public getRecipeDetail$(id: string): Observable<RecipeModel> {
    return this.http
      .get<RecipeModel>(this.url + "/" + id)
      .map((result: any) => {
        console.log(result); //<--it's an object
        return result; //.content; //just return "recipes"
      });
  }
}
