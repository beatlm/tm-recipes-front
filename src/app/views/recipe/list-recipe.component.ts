import { RecipeModel } from './RecipeModel';
import { EmbeddedList } from './EmbeddedList';
import { ResponseModel } from './responseModel';
import { RecipesService } from './recipes.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpErrorResponse} from '@angular/common/http';



@Component({
  selector: 'mr-list-recipe',
  templateUrl:'./listRecipe.html',
  styles: []
})
export class ListRecipeComponent implements OnInit {
  public numberOfRecipes = 0;
  public recipes: RecipeModel[] ;
  public message: string;
  public fullError:string;
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.refreshData();
  }

  private refreshData() {
    this.message = `Refreshing Data`;
    this.recipesService
    .getRecipesList$()
    .subscribe(this.showRecipes.bind(this), this.catchError.bind(this));

  }
private deleteRecipe(id: string){
  this.recipesService
  .deleteRecipe$(id)
  .subscribe(this.showDelete.bind(this), this.catchError.bind(this));
}
private showDelete(){
  alert("Borrada con éxito");
  this.refreshData();
}

  private showRecipes(resultado: RecipeModel[]) {
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
