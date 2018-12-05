import { RecipeResolverService } from "./services/recipe-resolver.service";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShowRecipeComponent } from "./views/show-recipe/show-recipe.component";
import { PlanningComponent } from "./views/planning/planning.component";
import { TodayComponent } from "./views/today/today.component";
import { ListRecipeComponent } from "./views/list-recipe/list-recipe.component";
import { RecipeComponent } from "./views/recipe/recipe.component";

const routes: Routes = [
  {
    path: "recipe/:id",
    component: ShowRecipeComponent
  },
  {
    path: "editrecipe/:id",
    component: RecipeComponent,
    resolve: {
      recipe: RecipeResolverService
    }
  },
  {
    path: "addrecipe",
    component: RecipeComponent,
    resolve: {
      recipe: RecipeResolverService
    }
  },
  {
    path: "planning",
    component: PlanningComponent
  },
  {
    path: "today",
    component: TodayComponent
  },
  {
    path: "listrecipe",
    component: ListRecipeComponent
  },
  {
    path: "login",
    component: RecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
