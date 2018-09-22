import { PlannerModel } from './../../services/model/plannerModel';
import { PlannerService } from './../../services/planner.service';
import { RecipeModel } from './../../services/RecipeModel';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import {HttpErrorResponse} from '@angular/common/http';
import { LoaderService } from '../../services/loader.service';
import { DatePipe } from '@angular/common';
import { TmFormatPipe } from '../../lib/components/pipes/tm.format.pipe';


@Component({
  selector: 'mr-recipe',
  templateUrl: './recipe.html',
  styles: []
})
export class RecipeComponent implements OnInit {
  public recipe: RecipeModel ;
  public planner: PlannerModel;
  public message:String;

  constructor( private route: ActivatedRoute,
    public loaderService: LoaderService,
    private router: Router,
    private recipesService: RecipesService,
  private plannerService:PlannerService,
  public datepipe: DatePipe,
  public tmFormat: TmFormatPipe) {
    
   }

  ngOnInit() {
    this.loaderService.fireLoader();
    let id = this.route.snapshot.paramMap.get('id');
    this.refreshData(id);
  }
  private refreshData(id) {
  
    this.recipesService
    .getRecipeDetail$(id)
    .subscribe(this.showRecipe.bind(this), this.catchError.bind(this));

  }

  private showRecipe(resultado: RecipeModel) {
    this.loaderService.stopLoader();
    this.recipe = resultado;
  }
  private catchError(err) {
    this.loaderService.stopLoader();
    alert("error");
    if (err instanceof HttpErrorResponse) {
      this.message = `Http Error: ${err.status}, text: ${err.statusText}`;
    } else {
      this.message = `Unknown error, text: ${err.message}`;
    }
   // this.fullError = err;
  }
  public deleteRecipe(id: string) {
    this.recipesService
      .deleteRecipe$(id)
      .subscribe(() => this.gotoInit(), this.catchError.bind(this));
  }
  private gotoInit(){
    this.router.navigate(['/listrecipe']);//TODO router es undefined
  }
  public addPlanner(recipeId: string) {
    this.planner= new PlannerModel("bea",this.datepipe.transform(Date.now(), 'yyyy-MM-dd'),recipeId);
    this.plannerService
      .savePlanner$(this.planner)
      .subscribe(() => this.okPlanner(), this.catchError.bind(this));
  }
  private okPlanner(){
    alert("ok planner");
  }
}
