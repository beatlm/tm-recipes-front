import { DynamicFormModule } from './../dynamic-form/dynamic-form.module';
import { RecipeResolverService } from '../services/recipe-resolver.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayComponent } from './today/today.component';
import { AppRoutingModule } from '../app-routing.module';
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { RecipesService } from '../services/recipes.service';
import { PlanningComponent } from './planning/planning.component';
import { ComponentsModule } from '../lib/components/components.module';
import { LoaderService } from '../services/loader.service';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { AlertService } from '../services/alert.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginService } from '../services/login.service';
import { PlannerService } from '../services/planner.service';
import { TmFormatPipe } from '../lib/components/pipes/tm.format.pipe';


@NgModule({
  imports: [
    CommonModule, AppRoutingModule, ComponentsModule, ReactiveFormsModule,DynamicFormModule
  ],
  declarations: [TodayComponent,ShowRecipeComponent,PlanningComponent,ListRecipeComponent, LoginComponent],
  exports: [TodayComponent,PlanningComponent,ShowRecipeComponent,ListRecipeComponent,TmFormatPipe],
  providers:[RecipesService,LoaderService, AlertService,LoginService, PlannerService, TmFormatPipe, RecipeResolverService], 
})
export class RecipesModule { }
