import { RecipeModel } from './../recipe/RecipeModel';
import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../recipe/recipes.service';

@Component({
  selector: 'mr-add-recipe',
  templateUrl: 'add-recipe.html',
  styles: []
})
export class AddRecipeComponent implements OnInit {
public recipe:RecipeModel= new RecipeModel();
constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  public saveRecipe() {

   this.recipesService
    .saveRecipe$(this.recipe)
    .subscribe(this.isOk.bind(this));


  }
  private isOk(){
    alert("Receta creada con éxito");
  }
}
