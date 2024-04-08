import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeInterface } from '../recipe-interface';
import { RecipeServiceService } from '../../service/recipe-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  
  newRecipe: RecipeInterface = {
    id: 0,
    name: '', 
    ingredients: [], 
    steps: [], 
    vegNonveg: 0,
    type: '', 
    image: '' 
  };
  
  constructor(
    private router: Router,
    private recipeService: RecipeServiceService
  ) {}

  ngOnInit(): void {}

  addRecipe(): void {
    
    this.recipeService.addRecipe(this.newRecipe).subscribe({
      next: () => {
        console.log('Recipe added successfully',this.newRecipe.name);
        alert('Recipe added Successfully');
        this.router.navigate(['/']);
      },
      error: (error: HttpErrorResponse) => {
        if (error.error && error.error.errors) {
          
          const validationErrors = error.error.errors;
          
          
          console.error('Validation errors:', validationErrors);
          
          
          const errorMessage = 'Validation errors occurred: ' + JSON.stringify(validationErrors);
          alert(errorMessage);
        } else {
         
          console.error('Error adding recipe:', error);
          alert('An unexpected error occurred while adding the recipe.');
        }
      }
    });

  }
  
  errorAddingRecipe(error: HttpErrorResponse): void {
    if (error.error && error.error.errors) {
      
      const validationErrors = error.error.errors;
      
      
      console.error('Validation errors:', validationErrors);
      
      
      const errorMessage = 'Validation errors occurred: ' + JSON.stringify(validationErrors);
      alert(errorMessage);
    } else {
      
      console.error('Error adding recipe:', error);
      alert('An unexpected error occurred while adding the recipe.');
    }
  }
}
    