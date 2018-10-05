import { Alert } from './../../lib/components/alert/alert';
import { AlertService } from "./../../services/alert.service";
import { IngredienteModel } from "../../services/model/IngredienteModel";
import { RecipeModel } from "../../services/model/RecipeModel";
import { Component, OnInit } from "@angular/core";
import { RecipesService } from "../../services/recipes.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: "mr-add-recipe",
  templateUrl: "add-recipe.html",
  styles: []
})
export class AddRecipeComponent implements OnInit {
  

  addRecipeForm: FormGroup;
  lista: Array<IngredienteModel>;
  pasos: Array<String>;
  tags: Array<String>;
  files = [];
  filestring: String;
  alert: Alert;

  constructor(
    private recipesService: RecipesService,
    private alertService: AlertService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    
    this.addRecipeForm = this.fb.group({
      nombre: ["", Validators.required],
      comensales: ["", Validators.required],
      preparation: ["", Validators.required],
      total: ["", Validators.required],
      ingrediente: ["", Validators.required],
      cantidad: ["", Validators.required],
      paso: ["", Validators.required],
      tags: ["",Validators.required],
      imagen: [""]
    });
    this.lista = [];
    this.pasos = [];
    this.tags = [];

  }

  saveRecipe() {
 
    this.tags=this.addRecipeForm.value.tags.split(",");

    var recipe: RecipeModel = new RecipeModel(
      this.addRecipeForm.value.nombre,
      this.addRecipeForm.value.comensales,
      this.addRecipeForm.value.total,
      this.addRecipeForm.value.preparation,
      this.lista,
      this.pasos,
      this.tags,
      this.filestring == undefined ? null : this.filestring
    );
    this.recipesService.saveRecipe$(recipe).subscribe(this.isOk.bind(this));
  }
  private isOk() {
    this.addRecipeForm.reset();
    this.lista = [];
    this.pasos = [];
    this.tags = [];
    this.files = [];
    this.filestring = "";
    this.alertService.create("La receta se ha añadido correctamente.","success",2500);
  }
  anadirIngrediente() {
    this.lista.push(
      new IngredienteModel(
        this.addRecipeForm.controls.ingrediente.value,
        this.addRecipeForm.controls.cantidad.value
      )
    );
    this.addRecipeForm.controls.ingrediente.reset();
    this.addRecipeForm.controls.cantidad.reset();
    this.addRecipeForm.controls.imagen.reset();
  }
  deleteIngredient(index) {
    this.lista.splice(index, 1);
  }
  anadirPaso() {
    this.pasos.push(this.addRecipeForm.controls.paso.value);
    this.addRecipeForm.controls.paso.reset();
  }
  deletePaso(index) {
    this.pasos.splice(index, 1);
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

 
}
