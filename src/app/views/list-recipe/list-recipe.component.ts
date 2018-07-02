import { Alert } from './../../lib/components/alert/alert';
import { RecipeModel } from "../../services/RecipeModel";
import { EmbeddedList } from "../../services/EmbeddedList";
import { ResponseModel } from "../../services/responseModel";
import { RecipesService } from "../../services/recipes.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from "@angular/common/http";
import { LoaderService } from "./../../services/loader.service";
import { Router } from "@angular/router";
import { AlertService } from "./../../services/alert.service";

@Component({
  selector: "mr-list-recipe",
  templateUrl: "./listRecipe.html",
  styles: []
})
export class ListRecipeComponent implements OnInit {
  public numberOfRecipes = 0;
  public recipes: RecipeModel[];
  alert: Alert;


  constructor(
    private recipesService: RecipesService,
    public loaderService: LoaderService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.refreshData();
   
  }

  private refreshData() {
    this.loaderService.fireLoader();
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
    this.alertService.create(
      "La receta se ha borrado correctamente." , //title
      "success", //type
      2500 // time
    );

    this.refreshData();
  }

  private showRecipes(resultado: RecipeModel[]) {
    this.loaderService.stopLoader();
    this.recipes = resultado;
  }
  private showCount(data: any) {
    this.numberOfRecipes = data.count;
  }

  private catchError(err) {

    this.alertService.create(
      "Ha ocurrido un error" , //title
      "danger", //type
      2500 // time
    );
  }
  private seeRecipe(id): void {
    this.router.navigate(["recipe/"+id]);
  }
}
