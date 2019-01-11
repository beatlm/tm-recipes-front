import { AlertService } from "./../../services/alert.service";
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { IngredienteModel } from "../../services/model/IngredienteModel";
import { DynamicFormComponent } from "../../dynamic-form/containers/dynamic-form/dynamic-form.component";
import { RecipeModel } from "../../services/model/RecipeModel";
import { RecipesService } from "../../services/recipes.service";
import { Router, ActivatedRoute } from "@angular/router";
import { LoaderService } from "../../services/loader.service";

@Component({
  selector: "mr-recipe",
  template: `  
  <div class="container">    
    <mr-dynamic-form [config]="config" (submitted)="formSubmitted($event)" class="dynamicForm">    
    </mr-dynamic-form>  
  </div>  `,
  styles: []
})
export class RecipeComponent implements OnInit {
  public currentRecipe: RecipeModel;
  private files = []; //TODO revisar si es necesario
  @ViewChild(DynamicFormComponent)
  public recipeForm: DynamicFormComponent;
  public config = [];

  constructor(
    private alertService: AlertService,
    private recipesService: RecipesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.currentRecipe = this.activatedRoute.snapshot.data.recipe;

    this.config = [
      {
        name: "title",
        type: "input",
        placeholder: "Título de la receta",
        divClass: "leftIntputText",
        value: this.currentRecipe? this.currentRecipe.title: "" 
      },
      {
        name: "Seleccionar imagen",
        type: "image",
        divClass: "file-field input-field",
        change: event => {
          this.getFiles(event);
        },
        src:
          this.currentRecipe && this.currentRecipe.imagen
            ? this.currentRecipe.imagen
            : "../../assets/images/default.png" //this.fileString  || '../../assets/images/default.png'
      },
      {
        name: "tags",
        type: "input",
        placeholder: "Tags",
        divClass: "leftIntputText",
        value: this.currentRecipe ? this.currentRecipe.tags : ""
      },
      {
        name: "amount",
        label: "raciones",
        inputType: "number",
        type: "input",
        divClass: "threeIntputText",
        value: this.currentRecipe ? this.currentRecipe.amount : ""
      },
      {
        name: "preparation",
        label: "Tiempo preparacion",
        type: "input",
        inputType: "number",
        placeholder: "minutos",
        divClass: "threeIntputText",
        value: this.currentRecipe ? this.currentRecipe.preparation : ""
      },
      {
        name: "total",
        label: "Tiempo total",
        type: "input",
        inputType: "number",
        placeholder: "minutos",
        divClass: "threeIntputText",
        value: this.currentRecipe ? this.currentRecipe.total : ""
      },

      {
        name: "ingredients",
        label: "Añadir ingrediente",
        type: "input",
        placeholder: "Ingrediente",
        divClass: "threeIntputText",
        value: ""
      },
      {
        name: "amount",
        type: "input",
        inputType: "number",
        placeholder: "gramos",
        divClass: "threeIntputText"
      },
      {
        name: "addIngredientButton",
        label: "Añadir ingrediente",
        type: "button",
        buttonType: "button",
        class: "btn",
        click: () => {
          this.anadirIngrediente();
        }
      },
      {
        name: "ingredientsList",
        type: "table",
        class: "col4 s3",
        clickDelete: i => {
          this.deleteIngredient(i);
        },
        list: this.currentRecipe ? this.currentRecipe.ingredients : []
      },
      {
        name: "step",
        type: "input",
        placeholder: "Paso",
        divClass: "oneIntputText",
        value: ""
      },
      {
        name: "addStepButton",
        label: "Añadir paso",
        type: "button",
        buttonType: "button",
        class: "btn",
        click: () => {
          this.anadirPaso();
        }
      },
      {
        name: "pasos",
        type: "tablePasos",
        class: "col4 s3",
        list: this.currentRecipe ? this.currentRecipe.pasos : [],
        click: i => {
          this.deletePaso(i);
        }
      },
      {
        name: "saveButton",
        label: "Guardar",
        type: "button",
        class: "btn btn-main",
        buttonType: "submit",
        icon: "add",
        click: form => {
        }
      }
    ];
  }

  formSubmitted(data) {
    console.log("formSubmitted "+this.recipeForm.form);
    this.loaderService.fireLoader();
    console.log("Form" + data.image);

    var editRecipeModel: RecipeModel;
    if (this.currentRecipe) {
      editRecipeModel = RecipeModel.mixData(data, this.currentRecipe);
    } else {
      editRecipeModel = RecipeModel.fromData(data);
    }

    if (this.recipeForm.config[1].src) {
      editRecipeModel.imagen = this.recipeForm.config[1].src;
    }
    if (this.currentRecipe != undefined) {
      console.log("Edit Recipe is called");
      this.editRecipe(editRecipeModel);
    } else {
      console.log("Save Recipe is called");
      this.saveRecipe(editRecipeModel);
    }
  }

  anadirIngrediente() {
    this.recipeForm.config[9].list.push(
      new IngredienteModel(
        this.recipeForm.form.controls.ingredients.value,
        this.recipeForm.form.controls.amount.value
      )
    );
    this.recipeForm.form.controls.ingredients.reset();
    this.recipeForm.form.controls.amount.reset();
  }
  deleteIngredient(index) {
    this.recipeForm.config[9].list.splice(index, 1);
  }

  anadirPaso() {
    this.recipeForm.config[12].list.push(
      this.recipeForm.form.controls.step.value
    );
    this.recipeForm.form.controls.step.reset();
  }

  deletePaso(index) {
    this.recipeForm.config[12].list.splice(index, 1);
  }

  getFiles(event) {
    this.files = event.target.files;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.files[0]);
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.recipeForm.config[1].src = //TODO esta bien recuperarlo de las posiciones del config?
      "data:" + this.files[0].type + ";base64," + btoa(binaryString); // Converting binary string data.
  }

  /********EDIT  */

  editRecipe(recipe: RecipeModel) {
    this.recipesService
      .editRecipe$(recipe, this.currentRecipe.id)
      .subscribe(this.isOk.bind(this), this.catchError.bind(this));
  }
  private isOk() {
    this.loaderService.stopLoader();
    this.alertService.create(
      "La receta se ha modificado correctamente.",
      "success",
      2500
    );
    this.router.navigate(["listrecipe"]);
  }

  private catchError(err) {
    this.loaderService.stopLoader();
    this.alertService.create(
      "La receta no se ha modificado correctamente." + err.message,
      "danger",
      2500
    );
  }

  /******* ADD   */
  saveRecipe(recipe: RecipeModel) {
    this.recipesService
      .saveRecipe$(recipe)
      .subscribe(this.isOkAdd.bind(this), this.catchError.bind(this));
  }
  private isOkAdd(value) {
    this.loaderService.stopLoader();
    this.recipeForm.form.reset();
    value.tags = [];
    this.files = [];

    this.alertService.create(
      "La receta se ha añadido correctamente.",
      "success",
      2500
    );
    this.router.navigate(["listrecipe"]);
  }
}