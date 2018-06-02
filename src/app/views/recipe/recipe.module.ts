
import { RecipesService } from '../../services/recipes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [RecipeComponent],
  exports: [RecipeComponent],
  providers:[RecipesService]
})
export class RecipeModule { }
