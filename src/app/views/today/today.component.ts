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
      tagId: "",
      tagOption: ""    });

    this.searchTagForm.get("tagOption").valueChanges.subscribe(val => {
      this.searchTagForm.value.tagOption = val;
      console.log("FORM MIO");      
      console.log(this.searchTagForm);
      this.buscarTag(this.searchTagForm.value.tagOption);
    });
  }


  public buscarTag(tag: String) {

      console.log("buscarTag :" + tag);
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
      "Ha ocurrido un error", //title
      "danger", //type
      2500 // time
    );
  }
}
