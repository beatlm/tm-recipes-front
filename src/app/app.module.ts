import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import{ ComponentsModule } from './lib/components/components.module';
import { RecipeModule } from './views/recipe/recipe.module'
import { AddRecipeModule } from './views/add-recipe/add-recipe.module';
import { PlanningModule } from './views/planning/planning.module';
import {  HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    RecipeModule,
    AddRecipeModule,
    PlanningModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
