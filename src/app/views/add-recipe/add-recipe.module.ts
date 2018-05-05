import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import {RecipesService} from '../recipe/recipes.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [AddRecipeComponent],
  exports: [AddRecipeComponent],
  providers:[RecipesService]
})
export class AddRecipeModule { }
