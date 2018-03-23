import { RecipesService } from './recipes.service';
import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipeModel';
import {Observable} from "rxjs/Observable";
import {HttpErrorResponse} from '@angular/common/http';



@Component({
  selector: 'mr-list-recipe',
  templateUrl:'./listRecipe.html',
  styles: []
})
export class ListRecipeComponent implements OnInit {
  public numberOfRecipes = 0;
 // public recipe: RecipeModel = new RecipeModel();
 // public recipe2: RecipeModel = new RecipeModel();
  public recipes: RecipeModel[] ;
  public message: string;
  public fullError:string;
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.refreshData();
/*this.recipe= new RecipeModel();
this.recipe.comensales=2;
this.recipe.name= "Galletas Avena"
this.recipe.preparingTime=10;
this.recipe.totalTime=20;
this.recipe.ingredients=["Avena en copos", "Huevos", "Sal", "Miel", "Azucar Moreno", "Aceite de oliva"]
this.recipes.push(this.recipe);
this.recipe2= new RecipeModel();
this.recipe2.comensales=2;
this.recipe2.name= "Galletas Avena"
this.recipe2.preparingTime=10;
this.recipe2.totalTime=20;
this.recipe2.ingredients=["Avena en copos", "Huevos", "Sal", "Miel", "Azucar Moreno", "Aceite de oliva"]
this.recipes.push(this.recipe2);
  this.numberOfRecipes=this.recipes.length;*/
  }

  private refreshData() {
    this.message = `Refreshing Data`;
   // this.numberOfRecipes = this.recipesService.getNumberOfRecipes();
    //this.recipes = this.recipesService.getRecipesList();
    this.recipesService
    .getRecipesList$()
    .subscribe(this.showRecipes.bind(this), this.catchError.bind(this));

  /*this.recipesService
    .getNumberOfRecipes$()
    .subscribe(this.showCount.bind(this), this.catchError.bind(this));
*/
  }

  private showRecipes(recipes: RecipeModel[]) {
    this.recipes = recipes;
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
