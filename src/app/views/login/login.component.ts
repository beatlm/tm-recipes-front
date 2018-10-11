import { AlertService } from "./../../services/alert.service";
import { LoginService } from "./../../services/login.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { IngredienteModel } from "../../services/model/IngredienteModel";
import { DynamicFormComponent } from "../../dynamic-form/containers/dynamic-form/dynamic-form.component";

@Component({
  selector: "mr-login",
  templateUrl: "./login.html",
  styles: []
})
export class LoginComponent implements OnInit {
fileString:string;//TODO revisar si es necesario
files = [];//TODO revisar si es necesario
  @ViewChild(DynamicFormComponent) editRecipeForm: DynamicFormComponent;
  config = [
    {
      type: "input",
      name: "titulo",
      placeholder: "Título de la receta",
      divClass: "leftIntputText"
    },
    {
      type: "image",
      name: "Imagen",
      divClass: "file-field input-field",
      change:() => {
        this.anadirIngrediente() ;
      },
      src:this.fileString  || '../../assets/images/default.png' 
    },
    {
      type: "input",
      name: "tags",
      placeholder: "Tags",
      divClass: "leftIntputText"
    },
    {
      label: "raciones",
      inputType: "number",
      type: "input",
      name: "racciones",
      divClass: "threeIntputText"
    },
    {
      label: "Tiempo preparacion",
      type: "input",
      inputType: "number",
      name: "preparacion",
      placeholder: "minutos",
      divClass: "threeIntputText"
    },
    {
      label: "Tiempo total",
      type: "input",
      inputType: "number",
      name: "total",
      placeholder: "minutos",
      divClass: "threeIntputText"
    },

    {
      label: "Añadir ingrediente",
      type: "input",
      name: "ingrediente",
      placeholder: "Ingrediente",
      divClass: "threeIntputText"
    },
    {
      type: "input",
      inputType: "number",
      name: "cantidad",
      placeholder: "gramos",
      divClass: "threeIntputText"
    },
    {
      label: "Añadir ingrediente",
      name: "submit",
      type: "button",
      buttonType: "button",
      class: "smallButton",
      click: () => {
        this.anadirIngrediente() ;
      }
    },
    {
      name: "listaIngredientes",
      type: "table",
      class: "col4 s3",
      lista: [new IngredienteModel('agua',200),new IngredienteModel('arroz',56)],
      click: (i) => {
        this.deleteIngredient(i);
      }
    },
    {
      type: "input",
      name: "paso",
      placeholder: "Paso",
      divClass: "oneIntputText"
    },
    {
      label: "Añadir paso",
      name: "addPaso",
      type: "button",
      buttonType: "button",
      class: "smallButton",
      click: () => {
        this.anadirPaso();
      }
    },
    {
      name: "listaPasos",
      type: "tablePasos",
      class: "col4 s3",
      lista: ['blablabla','blebleble'],
      click: (i) => {
        this.deletePaso(i);
      }
    },
    

    {
      label: "Guardar",
      name: "submit",
      type: "button",
      class: "bigButton",
      buttonType: "submit"
    }
  ];

  formSubmitted(value) {
    console.log(value);
  }
  constructor(
    private loginService: LoginService,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  test() {
    alert("yujuuu");
  }

  anadirIngrediente() {
    this.editRecipeForm.config[8].lista.push(
      new IngredienteModel(
        this.editRecipeForm.form.controls.ingrediente.value,
        this.editRecipeForm.form.controls.cantidad.value
      )
    );
    this.editRecipeForm.form.controls.ingrediente.reset();
    this.editRecipeForm.form.controls.cantidad.reset();
  //  this.editRecipeForm.form.imagen.reset();
  }
  deleteIngredient(index) {
    this.editRecipeForm.config[8].lista.splice(index, 1);
  }
  anadirPaso() {
    this.editRecipeForm.config[11].lista.push(this.editRecipeForm.form.controls.paso.value);
    this.editRecipeForm.form.controls.paso.reset();
  }
  
  deletePaso(index) {
      this.editRecipeForm.config[11].lista.splice(index, 1);
  }

  getFiles(event) {
    this.files = event.target.files;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.files[0]);
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.fileString =
      "data:" + this.files[0].type + ";base64," + btoa(binaryString); // Converting binary string data.
  }


}
