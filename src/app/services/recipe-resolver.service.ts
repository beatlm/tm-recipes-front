import { Injectable } from "@angular/core";
import { RecipeModel } from "./model/RecipeModel";
import { Observable } from "rxjs";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from "@angular/router";
import { RecipesService } from "./recipes.service";

@Injectable()
export class RecipeResolverService implements Resolve<Observable<RecipeModel>> {
  constructor(private recipesService: RecipesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<RecipeModel> | Observable<never> {
    let id = route.paramMap.get("id");
    console.log("valor de id;" + id);
    if (id) {
      console.log("llamamos al servicio get detail");
      return this.recipesService.getRecipeDetail$(id);
    } else {
      console.log("modelo vacío");
      return null;
    }
  }
}
