
import { RecipesService } from './recipes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { ListRecipeComponent } from './list-recipe.component';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [RecipeComponent, ListRecipeComponent],
  exports: [RecipeComponent, ListRecipeComponent],
  providers:[RecipesService]
})
export class RecipeModule { }
