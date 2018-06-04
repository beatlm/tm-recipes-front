import { IngredienteModel } from "../../services/IngredienteModel";
import { RecipeModel } from '../../services/RecipeModel';
import { Component, OnInit } from "@angular/core";
import { RecipesService } from '../../services/recipes.service';
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

  constructor(
    private recipesService: RecipesService,
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
      paso: ["", Validators.required]
    });
    this.lista = [];
    this.pasos = [];
  }

  saveRecipe(form: FormGroup) {
    var recipe: RecipeModel = new RecipeModel(
      form.value.nombre,
      form.value.comensales,
      form.value.total,
      form.value.preparation,
      this.lista,
      this.pasos
    );
    this.recipesService.saveRecipe$(recipe).subscribe(this.isOk.bind(this));
  }
  private isOk() {
    alert("Receta creada con éxito");
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
}
