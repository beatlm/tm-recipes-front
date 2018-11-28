import { RecipeResolverService } from "./services/recipe-resolver.service";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeComponent } from "./views/recipe/recipe.component";
import { AddRecipeComponent } from "./views/add-recipe/add-recipe.component";
import { PlanningComponent } from "./views/planning/planning.component";
import { TodayComponent } from "./views/today/today.component";
import { ListRecipeComponent } from "./views/list-recipe/list-recipe.component";
import { LoginComponent } from "./views/login/login.component";

const routes: Routes = [
  {
    path: "recipe/:id",
    component: RecipeComponent
  },
  {
    path: "editrecipe/:id",
    component: LoginComponent,
    resolve: {
      recipe: RecipeResolverService
    }
  },
  {
    path: "addrecipe",
    component: LoginComponent,
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
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
