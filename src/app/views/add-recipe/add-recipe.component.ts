import { IngredienteModel } from './IngredienteModel';
import { RecipeModel } from './../recipe/RecipeModel';
import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../recipe/recipes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'mr-add-recipe',
  templateUrl: 'add-recipe.html',
  styles: []
})
export class AddRecipeComponent implements OnInit {
  addRecipeForm: FormGroup;
 lista: Array<IngredienteModel>;

constructor(private recipesService: RecipesService,private fb: FormBuilder) { }

  ngOnInit() {

    this.addRecipeForm = this.fb.group({
      nombre: ['', Validators.required],
      comensales: ['', Validators.required],
      preparation: ['', Validators.required],
      total: ['', Validators.required],
     ingrediente: ['', Validators.required],
     cantidad: ['', Validators.required]    });
     this.lista=[];
  }

  saveRecipe(form:FormGroup) {

   var recipe:RecipeModel= new RecipeModel(form.value.nombre,form.value.comensales,form.value.preparation,form.value.totalTime,this.lista);
   alert(this.lista);
   this.recipesService
    .saveRecipe$(recipe)
    .subscribe(this.isOk.bind(this));
  }
  private isOk(){
    alert("Receta creada con éxito");
  }
   anadirIngrediente(){
 //   alert('Nuevo ingrediente '+ this.addRecipeForm.controls.ingrediente.value+' Gramos: '+this.addRecipeForm.controls.cantidad.value);
    this.lista.push(new IngredienteModel(this.addRecipeForm.controls.ingrediente.value,this.addRecipeForm.controls.cantidad.value));
    ;
  
  }
  deleteIngredient(index){
    //alert(index);
    this.lista.splice(index, 1);
  }
}
