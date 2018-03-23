
import { RecipesService } from './recipes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { ListRecipeComponent } from './list-recipe.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecipeComponent, ListRecipeComponent],
  exports: [RecipeComponent, ListRecipeComponent],
  providers:[RecipesService]
})
export class RecipeModule { }
