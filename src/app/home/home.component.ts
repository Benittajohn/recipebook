import { Component, OnInit } from '@angular/core';
import { RecipeInterface } from '../recipes/recipe-interface';
import { RecipeServiceService } from '../service/recipe-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: RecipeInterface[] = [];
  randomRecipes: RecipeInterface[] = [];
  recipeType = '';
  searchText = '';
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const filterDishName = params.get('Type');
      if (filterDishName) {
        this.recipeType = filterDishName;
        this.fetchFilteredRecipes();
      } else {
        this.loadAllRecipes();
      }
    });

    // Fetch all recipes
    // this.recipeService.GetRecipe().pipe(
    //   catchError(error => {
    //     console.error('Error fetching recipes:', error);
    //     this.errorMessage = 'An error occurred while fetching recipes.';
    //     return throwError('An error occurred while fetching recipes.');
    //   })
    // ).subscribe({
    //   next: (data: RecipeInterface[]) => {
    //     // Shuffle the recipes array
    //     this.recipes = data;
        
    //     // Take the first 10 recipes
    //     this.randomRecipes = this.recipes.slice(0, 10);
    //   },
    //   error: (error: any) => {
    //     console.error('Error fetching recipes:', error);
    //   }
    // });
  }

  fetchFilteredRecipes(): void {
    this.recipeService.GetRecipe().pipe(
      catchError(error => {
        console.error('Error fetching recipes:', error);
        this.errorMessage = 'An error occurred while fetching recipes.';
        return throwError('An error occurred while fetching recipes.');
      })
    ).subscribe({
      next: (data: RecipeInterface[]) => {
        if (this.searchText) {
          this.recipes = data.filter(recipe =>
            recipe.name?.trim().toLowerCase().includes(this.searchText.trim().toLowerCase())
          );
        } else {
          this.recipes = data.filter(recipe =>
            recipe.type?.trim().toLowerCase().includes(this.recipeType.trim().toLowerCase())
          );
        }
      },
      error: (error: any) => {
        console.error('Error filtering recipes:', error);
      }
    });
  }

  loadAllRecipes(): void {
  this.recipeService.GetRecipe().pipe(
    catchError(error => {
      console.error('Error fetching recipes:', error);
      this.errorMessage = 'An error occurred while fetching recipes.';
      return throwError('An error occurred while fetching recipes.');
    })
  ).subscribe({
    next: (data: RecipeInterface[]) => {
      // Shuffle the recipes array
      const shuffledRecipes = this.shuffleArray(data);
      
      // Take the first 10 recipes
      this.recipes = shuffledRecipes.slice(0, 10);
    },
    error: (error: any) => {
      console.error('Error loading recipes:', error);
    }
  });
}


  navigateToRecipePage(recipeType: string): void {
    this.router.navigate(['home', recipeType]);
  }

  onSearchTextEntered(searchValue: string): void {
    this.searchText = searchValue;
    this.fetchFilteredRecipes();
  }

  // Function to shuffle array
  shuffleArray(array: any[]): any[] {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}
