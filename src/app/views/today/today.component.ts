import { Component, OnInit } from "@angular/core";
import { RecipesService } from "../../services/recipes.service";
import { AlertService } from "../../services/alert.service";
import { Router } from "@angular/router";
import { LoaderService } from "../../services/loader.service";
import { RecipeModel } from "../../services/RecipeModel";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "mr-today",
  templateUrl: "./today.html",
  styles: []
})
export class TodayComponent implements OnInit {
  public recipes: RecipeModel[];
  public searchTagForm: FormGroup;

  constructor(
    private recipesService: RecipesService,
    public loaderService: LoaderService,
    private router: Router,
    private alertService: AlertService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.recipes = undefined;
    this.searchTagForm = this.fb.group({
      tagId: ""
    });

    this.searchTagForm.get("tagId").valueChanges.subscribe(val => {
      this.buscarTag();
    });

  }

  public buscarTag() {
    console.log("buscarTag :" + this.searchTagForm.value.tagId);
    this.recipesService
      .getRecipesListByTag$(this.searchTagForm.controls.tagId.value)
      .subscribe(this.showRecipes.bind(this), this.catchError.bind(this));
    //  this.searchTagForm.controls['tagId'].reset();
  }
  private showRecipes(resultado: RecipeModel[]) {
    this.loaderService.stopLoader();
    this.recipes = resultado;
  }

  private catchError(err) {
    this.loaderService.stopLoader();
    this.alertService.create(
      "Ha ocurrido un error", //title
      "danger", //type
      2500 // time
    );
  }

  private seeRecipe(id): void {
    this.router.navigate(["recipe/"+id]);
  }
}
