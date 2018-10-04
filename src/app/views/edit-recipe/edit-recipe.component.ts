import { Component, OnInit } from "@angular/core";
import { LoaderService } from "../../services/loader.service";
import { Router, ActivatedRoute } from "@angular/router";
import { RecipesService } from "../../services/recipes.service";
import { RecipeModel } from "../../services/model/RecipeModel";
import { HttpErrorResponse } from "@angular/common/http";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IngredienteModel } from "../../services/model/IngredienteModel";
import { AlertService } from "../../services/alert.service";
import { Alert } from "../../lib/components/alert/alert";

@Component({
  selector: "mr-edit-recipe",
  templateUrl: "./edit-recipe.html",
  styles: []
})
export class EditRecipeComponent implements OnInit {

  
  public recipe: RecipeModel;
  public message: String;
  public editRecipeForm: FormGroup;
  public ingredientes: Array<IngredienteModel>;
  public pasos: Array<String>;
  public tags: Array<String>;
  public filestring: String;
  public files = [];
  public alert: Alert;
  private recipeId: string;

  constructor(
    public loaderService: LoaderService,
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipesService,
    private alertService: AlertService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { recipe: RecipeModel }) => {
      if (data.recipe) {
        this.editRecipeForm = this.fb.group({
          nombre: [data.recipe.name, Validators.required],
          amount: [data.recipe.amount, Validators.required],
          preparation: [data.recipe.preparation, Validators.required],
          total: [data.recipe.total, Validators.required],
          ingrediente: ["", Validators.required],
          cantidad: ["", Validators.required],
          paso: ["", Validators.required],
          tags: ["", Validators.required],
          imagen: [""]
        });
        this.pasos = data.recipe.pasos;
        this.ingredientes = data.recipe.ingredients;
        this.tags = data.recipe.tags;
      }else{
        this.editRecipeForm = this.fb.group({
          nombre: ["", Validators.required],
          amount: ["", Validators.required],
          preparation: ["", Validators.required],
          total: ["", Validators.required],
          ingrediente: ["", Validators.required],
          cantidad: ["", Validators.required],
          paso: ["", Validators.required],
          tags: ["", Validators.required],
          imagen: [""]
        });
        this.ingredientes = [];
        this.pasos = [];
        this.tags = [];
      }
    });
  }

  anadirIngrediente() {
    this.ingredientes.push(
      new IngredienteModel(
        this.editRecipeForm.controls.ingrediente.value,
        this.editRecipeForm.controls.cantidad.value
      )
    );
    this.editRecipeForm.controls.ingrediente.reset();
    this.editRecipeForm.controls.cantidad.reset();
    this.editRecipeForm.controls.imagen.reset();
  }
  deleteIngredient(index) {
    this.ingredientes.splice(index, 1);
  }
  anadirPaso() {
    this.pasos.push(this.editRecipeForm.controls.paso.value);
    this.editRecipeForm.controls.paso.reset();
  }
  deletePaso(index) {
    this.pasos.splice(index, 1);
  }

  private catchError(err) {
    this.loaderService.stopLoader();

    this.alertService.create(
      "La receta no se ha modificado correctamente." + err.message,
      "danger",
      2500
    );

    if (err instanceof HttpErrorResponse) {
      this.message = `Http Error: ${err.status}, text: ${err.statusText}`;
    } else {
      this.message = `Unknown error, text: ${err.message}`;
    }
    // this.fullError = err;
  }
  getFiles(event) {
    this.files = event.target.files;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.files[0]);
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.filestring =
      "data:" + this.files[0].type + ";base64," + btoa(binaryString); // Converting binary string data.
  }

  editRecipe() {
    this.tags = this.editRecipeForm.value.tags.split(",");

    var recipe: RecipeModel = new RecipeModel(
      this.editRecipeForm.value.nombre,
      this.editRecipeForm.value.comensales,
      this.editRecipeForm.value.total,
      this.editRecipeForm.value.preparation,
      this.ingredientes,
      this.pasos,
      this.tags,
      this.filestring == undefined ? null : this.filestring
    );
    this.recipesService
      .editRecipe$(recipe, this.recipeId)
      .subscribe(this.isOk.bind(this), this.catchError.bind(this));
  }
  private isOk() {
    this.alertService.create(
      "La receta se ha modificado correctamente.",
      "success",
      2500
    );
    this.router.navigate(["listrecipe"]);
  }

 
}
