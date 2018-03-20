import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecipeComponent],
  exports: [RecipeComponent]
})
export class RecipeModule { }
