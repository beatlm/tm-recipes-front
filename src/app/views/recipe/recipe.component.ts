import { RecipeModel } from './../../services/RecipeModel';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'mr-recipe',
  templateUrl: './recipe.html',
  styles: []
})
export class RecipeComponent implements OnInit {
  public recipe: RecipeModel ;
  public message:String;
  constructor( private route: ActivatedRoute,private recipesService: RecipesService) {
    
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.refreshData(id);
  }
  private refreshData(id) {

    this.recipesService
    .getRecipeDetail$(id)
    .subscribe(this.showRecipe.bind(this), this.catchError.bind(this));

  }

  private showRecipe(resultado: RecipeModel) {
    this.recipe = resultado;
  }
  private catchError(err) {
    alert("error");
    if (err instanceof HttpErrorResponse) {
      this.message = `Http Error: ${err.status}, text: ${err.statusText}`;
    } else {
      this.message = `Unknown error, text: ${err.message}`;
    }
   // this.fullError = err;
  }

}
