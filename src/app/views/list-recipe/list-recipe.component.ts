import { Alert } from "./../../lib/components/alert/alert";
import { RecipeModel } from "../../services/model/RecipeModel";
import { RecipesService } from "../../services/recipes.service";
import { Component, OnInit } from "@angular/core";

import { LoaderService } from "./../../services/loader.service";
import { Router } from "@angular/router";
import { ConfirmService } from "../../services/confirm.service";
import { AlertService } from "../../services/alert.service";

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
    private alertService: AlertService,
    private confirmService: ConfirmService
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
  public deleteRecipe(id: string, name: string) {
    let that = this;
    that.confirmService.confirm(
      "¿Estas seguro que quieres borrar la receta '" + name + "'?",
      function() {
        that.recipesService
          .deleteRecipe$(id)
          .subscribe(that.showDelete.bind(that), that.catchError.bind(that));
      },
      function() {
        console.log("Ha dicho no");
      }
    );
  }
  public editRecipe(id: string) {
    this.router.navigate(["editrecipe/" + id]);
  }
  private showDelete() {
    this.alertService.create(
      "La receta se ha borrado correctamente.", //name
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
    this.loaderService.stopLoader();
    this.alertService.create(
      "Ha ocurrido un error", //name
      "danger", //type
      2500 // time
    );
  }
  private seeRecipe(id): void {
    this.router.navigate(["recipe/" + id]);
  }

  public clickMethod(name: string) {
    if (confirm("Are you sure to delete " + name)) {
      console.log("Implement delete functionality here");
    }
  }
}
