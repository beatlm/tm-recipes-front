import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './views/recipe/recipe.component';
import { AddRecipeComponent } from './views/add-recipe/add-recipe.component';
import { PlanningComponent } from './views/planning/planning.component';
import { TodayComponent } from './views/today/today.component';
import {ListRecipeComponent}  from './views/recipe/list-recipe.component';


const routes: Routes = [
 { path: "listrecipe/recipe/:id",
  component: RecipeComponent
},
{ path: "addrecipe",
component: AddRecipeComponent
},
{ path: "planning",
component: PlanningComponent

},
{ path: "today",
component: TodayComponent
},
{
  path:"listrecipe",
  component: ListRecipeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
