import { AlertService } from "./../../services/alert.service";
import { LoginService } from "./../../services/login.service";
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { IngredienteModel } from "../../services/model/IngredienteModel";
import { DynamicFormComponent } from "../../dynamic-form/containers/dynamic-form/dynamic-form.component";
import { RecipeModel } from "../../services/model/RecipeModel";
import { RecipesService } from "../../services/recipes.service";
import { Router, ActivatedRoute } from "@angular/router";
import { LoaderService } from "../../services/loader.service";

@Component({
  selector: "mr-login",
  templateUrl: "./login.html",
  styles: []
})
export class LoginComponent implements OnInit {
  public currentRecipe: RecipeModel;
  private files = []; //TODO revisar si es necesario
  @ViewChild(DynamicFormComponent)
  public recipeForm: DynamicFormComponent;
  public config=[];
  

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
            name: "name",
            type: "input",
            placeholder: "Título de la receta",
            divClass: "leftIntputText",
            value:this.currentRecipe?this.currentRecipe.name:"",
          },
          {
            name: "image",
            type: "image",
            divClass: "file-field input-field",
            change: event => {
              this.getFiles(event);
            },
            src: "../../assets/images/default.png" //this.fileString  || '../../assets/images/default.png'
          },
          {
            name: "tags",
            type: "input",
            placeholder: "Tags",
            divClass: "leftIntputText",
            value:this.currentRecipe?this.currentRecipe.tags:"",
          },
          {
            name: "amount",
            label: "raciones",
            inputType: "number",
            type: "input",
            divClass: "threeIntputText",
            value: this.currentRecipe?this.currentRecipe.amount:""
          },
          {
            name: "preparation",
            label: "Tiempo preparacion",
            type: "input",
            inputType: "number",
            placeholder: "minutos",
            divClass: "threeIntputText",
            value:this.currentRecipe?this.currentRecipe.preparation:"",
          },
          {
            name: "total",
            label: "Tiempo total",
            type: "input",
            inputType: "number",
            placeholder: "minutos",
            divClass: "threeIntputText",
            value:this.currentRecipe?this.currentRecipe.total:"",
          },
      
          {
            name: "ingredients",
            label: "Añadir ingrediente",
            type: "input",
            placeholder: "Ingrediente",
            divClass: "threeIntputText",
            value:""
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
            class: "smallButton",
            click: () => {
              this.anadirIngrediente();
            }
          },
          {
            name: "ingredients",
            type: "table",
            class: "col4 s3",
            list: [],
            click: i => {
              this.deleteIngredient(i);
            }
          },
          {
            name: "step",
            type: "input",
            placeholder: "Paso",
            divClass: "oneIntputText",
            value:""
          },
          {
            name: "addStepButton",
            label: "Añadir paso",
            type: "button",
            buttonType: "button",
            class: "smallButton",
            click: () => {
              this.anadirPaso();
            }
          },
          {
            name: "pasos",
            type: "tablePasos",
            class: "col4 s3",
            list: [],
            click: i => {
              this.deletePaso(i);
            }
          },
      
          {
            name: "saveButton",
            label: "Guardar",
            type: "button",
            class: "bigButton",
            buttonType: "submit",
            click:(form) => {
              //this.formSubmitted(form);
            }
          }
        ];
      
  }

  formSubmitted(data) {//en form llega nombre=valor
    //TODO crear clase con el modelo del formulario y que el RecipeModel tenga un constructor a partir del nuevo modelo
    console.log("Form"+data);
   // const editRecipeModel = RecipeModel.fromData(form);
   var editRecipeModel:RecipeModel;
if(this.currentRecipe){
  editRecipeModel =RecipeModel.mixData(data,this.currentRecipe);
}else{
  editRecipeModel =RecipeModel.fromData(data);
}

  //  const editRecipeModel =RecipeModel.mixData(data,this.currentRecipe);
    editRecipeModel.ingredients=this.recipeForm.config[9].list;
    editRecipeModel.pasos= this.recipeForm.config[12].list;

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
    //  this.editRecipeForm.form.imagen.reset();
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

  editRecipe(recipe:RecipeModel) {

    this.recipesService
      .editRecipe$(recipe, this.currentRecipe.id)
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

  private catchError(err) {
    this.loaderService.stopLoader();

    this.alertService.create(
      "La receta no se ha modificado correctamente." + err.message,
      "danger",
      2500
    );
  }

  /******* ADD   */
  saveRecipe(recipe:RecipeModel) {
     this.recipesService.saveRecipe$(recipe).subscribe(this.isOkAdd.bind(this));
  }
  private isOkAdd(value) {
    this.recipeForm.form.reset();
    value.tags = [];
    this.files = [];

    this.alertService.create(
      "La receta se ha añadido correctamente.",
      "success",
      2500
    );
  }
}
