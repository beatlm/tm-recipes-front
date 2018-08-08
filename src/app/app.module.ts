import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ ComponentsModule } from './lib/components/components.module';
import {  HttpClientModule } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesModule } from './views/recipes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    RecipesModule,
    HttpClientModule,
    BrowserAnimationsModule  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
