import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { RecipeModel } from '../../services/RecipeModel';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'mr-edit-recipe',
  templateUrl: "./edit-recipe.html",
  styles: []
})
export class EditRecipeComponent implements OnInit {
  public recipe: RecipeModel ;
  public message:String;

  constructor(   public loaderService: LoaderService,
    private route: ActivatedRoute,
    private recipesService: RecipesService) { }

  ngOnInit() {
    this.loaderService.fireLoader();
    let id = this.route.snapshot.paramMap.get('id');
    this.refreshData(id);
  }
  private refreshData(id) {
  
    this.recipesService
    .getRecipeDetail$(id)
    .subscribe(this.showRecipe.bind(this), this.catchError.bind(this));

  }
  private showRecipe(resultado: RecipeModel) {
    this.loaderService.stopLoader();
    this.recipe = resultado;
  }
  private catchError(err) {
    this.loaderService.stopLoader();
    alert("error");
    if (err instanceof HttpErrorResponse) {
      this.message = `Http Error: ${err.status}, text: ${err.statusText}`;
    } else {
      this.message = `Unknown error, text: ${err.message}`;
    }
   // this.fullError = err;
  }

}
