import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddRecipeComponent],
  exports: [AddRecipeComponent]
})
export class AddRecipeModule { }
