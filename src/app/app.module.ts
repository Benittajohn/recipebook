import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import {NgxPaginationModule} from 'ngx-pagination';
import {MessagesModule} from 'primeng/messages';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';
import { RecipeServiceService } from './service/recipe-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HaederComponent } from './haeder/haeder.component';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SearchComponent } from './search/search.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RecipeUpdateComponent } from './recipes/recipe-update/recipe-update.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { NotifyComponentComponent } from './notify-component/notify-component.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';




@NgModule({
  declarations: [							
    AppComponent,
    RecipeListComponent,
    RecipeCardComponent,
      HaederComponent,
      RecipeDetailComponent,
      RecipePageComponent,
      SearchComponent,
      UserLoginComponent,
      RecipeUpdateComponent,
      AddRecipeComponent,
      HomeComponent,
      NotifyComponentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    ToastModule,
    NgxPaginationModule
    
    
    
  
  ],
  providers: [
    
    provideClientHydration(),
    RecipeServiceService,
    provideAnimationsAsync(),
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
