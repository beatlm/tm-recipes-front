import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';
import { LoaderService } from '../../services/loader.service';
import { RecipeModel } from '../../services/RecipeModel';

@Component({
  selector: 'mr-today',
  templateUrl:'./today.html',
  styles: []
})
export class TodayComponent implements OnInit {
  public recipes: RecipeModel[];
  constructor(  private recipesService: RecipesService,
    public loaderService: LoaderService,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
    this.recipes=new RecipeModel[0];
  }

  public buscarTag(tag:String){
    this.recipesService
    .getRecipesListByTag$(tag)
    .subscribe(this.showRecipes.bind(this), this.catchError.bind(this));
  }
  private showRecipes(resultado: RecipeModel[]) {
    this.loaderService.stopLoader();
    this.recipes = resultado;
  }

  private catchError(err) {
    this.loaderService.stopLoader();
    this.alertService.create(
      "Ha ocurrido un error" , //title
      "danger", //type
      2500 // time
    );
  }
}
