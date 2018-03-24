import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe.component';
import { FormsModule } from '@angular/forms';
import {RecipesService} from '../recipe/recipes.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AddRecipeComponent],
  exports: [AddRecipeComponent],
  providers:[RecipesService]
})
export class AddRecipeModule { }
