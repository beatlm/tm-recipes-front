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
  public tagsStatus: boolean[];

  constructor(
    private recipesService: RecipesService,
    public loaderService: LoaderService,
    private router: Router,
    private alertService: AlertService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.tagsStatus = [false, false];
    this.recipes = undefined;
    this.searchTagForm = this.fb.group({
      textTag: "",
      verduraTag: false,
      pescadoTag: false
    });

    this.searchTagForm.valueChanges.subscribe(val => {
      this.buscarTag();
    });
  }

  public buscarTag() {
    let searchTag = this.searchTagForm.value.textTag;

    if (this.tagsStatus[0] != this.searchTagForm.controls.verduraTag.value) {
      searchTag = "verdura";
      this.tagsStatus[0] = this.searchTagForm.controls.verduraTag.value;
    } else if (
      this.tagsStatus[1] != this.searchTagForm.controls.pescadoTag.value
    ) {
      this.tagsStatus[1] = this.searchTagForm.controls.pescadoTag.value;
      searchTag = "pescado";
    }

    this.recipesService
      .getRecipesListByTag$(searchTag)
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

  private seeRecipe(id): void {
    this.router.navigate(["recipe/" + id]);
  }
}
