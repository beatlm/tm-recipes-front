import { RecipeModel } from "../../services/RecipeModel";
import { EmbeddedList } from "../../services/EmbeddedList";
import { ResponseModel } from "../../services/responseModel";
import { RecipesService } from "../../services/recipes.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from "@angular/common/http";
import { LoaderService } from "./../../services/loader.service";

@Component({
  selector: "mr-list-recipe",
  templateUrl: "./listRecipe.html",
  styles: []
})
export class ListRecipeComponent implements OnInit {
  public numberOfRecipes = 0;
  public recipes: RecipeModel[];
  public message: string;
  public fullError: string;

  constructor(
    private recipesService: RecipesService,
    public loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.refreshData();
  }

  private refreshData() {
    this.loaderService.fireLoader();
    this.message = `Refreshing Data`;
    this.recipesService
      .getRecipesList$()
      .subscribe(this.showRecipes.bind(this), this.catchError.bind(this));
  }
  private deleteRecipe(id: string) {
    this.recipesService
      .deleteRecipe$(id)
      .subscribe(this.showDelete.bind(this), this.catchError.bind(this));
  }
  private showDelete() {
    alert("Borrada con éxito");
    this.refreshData();
  }

  private showRecipes(resultado: RecipeModel[]) {
    this.loaderService.stopLoader();
    this.recipes = resultado;
    this.message = `recipes Ok`;
  }
  private showCount(data: any) {
    this.numberOfRecipes = data.count;
    this.message = `count Ok`;
  }

  private catchError(err) {
    if (err instanceof HttpErrorResponse) {
      this.message = `Http Error: ${err.status}, text: ${err.statusText}`;
    } else {
      this.message = `Unknown error, text: ${err.message}`;
    }
    this.fullError = err;
  }
}
