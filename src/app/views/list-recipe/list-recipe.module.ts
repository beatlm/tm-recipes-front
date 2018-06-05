import { LoaderService } from './../../services/loader.service';

import { RecipesService } from '../../services/recipes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRecipeComponent } from './list-recipe.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ComponentsModule } from '../../lib/components/components.module';



@NgModule({
  imports: [
    CommonModule, AppRoutingModule, ComponentsModule
  ],
  declarations: [ListRecipeComponent],
  exports: [ListRecipeComponent],
  providers:[RecipesService,LoaderService]
})
export class ListRecipeModule { }
