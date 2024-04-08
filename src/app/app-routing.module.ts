import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { AppComponent } from './app.component';
import { HaederComponent } from './haeder/haeder.component';
import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RecipeUpdateComponent } from './recipes/recipe-update/recipe-update.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { NotifyComponentComponent } from './notify-component/notify-component.component';

const appRoutes:Routes=[
  
  {path:'recipe-list',component: RecipeListComponent},
  {path:'recipe-card',component:RecipeCardComponent},
  {path:'',component:HomeComponent},
  {path:'recipe-detail/:name',component:RecipeDetailComponent},
  {
    path:'recipe-veg',component:RecipeListComponent
  },
  { path:'recipe-nonveg',component:RecipeListComponent},
  {
    path:'recipe-page',component:RecipePageComponent
  },
  {
    path:'home/:Type',component:HomeComponent 
  },
  {
    path:'admin-login',component:UserLoginComponent
  },
  {
    path:'recipe/:id/update',component:RecipeUpdateComponent
  },
  {
    path:'create-recipe',component:AddRecipeComponent
  },
  {
    path:'notify-user',component:NotifyComponentComponent
  },
  {
    path:'**',component:HomeComponent
  }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
