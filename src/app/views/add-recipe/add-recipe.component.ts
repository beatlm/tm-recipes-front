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

constructor(private recipesService: RecipesService,private fb: FormBuilder) { }

  ngOnInit() {

    this.addRecipeForm = this.fb.group({
      nombre: ['', Validators.required],
      comensales: ['', Validators.required],
      preparation: ['', Validators.required],
      totalTime: ['', Validators.required],
     ingredients: ['', Validators.required],
     cantidad: ['', Validators.required]
    });
  }

  saveRecipe(form:FormGroup) {

   var recipe:RecipeModel= new RecipeModel(form.value.nombre,form.value.comensales,form.value.preparation,form.value.totalTime);//form.value.ingredients)
   this.recipesService
    .saveRecipe$(recipe)
    .subscribe(this.isOk.bind(this));


  }
  private isOk(){
    alert("Receta creada con éxito");
  }
   anadirIngrediente(){
    alert('Nuevo ingrediente');
  }
}
