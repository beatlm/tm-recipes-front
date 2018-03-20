import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './views/recipe/recipe.component';
import { AddRecipeComponent } from './views/add-recipe/add-recipe.component';
import { PlanningComponent } from './views/planning/planning.component';
import { TodayComponent } from './views/today/today.component';


const routes: Routes = [
 { path: "recipe",
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

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
