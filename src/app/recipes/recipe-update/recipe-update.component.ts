// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeServiceService } from '../../service/recipe-service.service';
import { RecipeInterface } from '../recipe-interface';
import { MessageService } from 'primeng/api'; // Import MessageService from PrimeNG

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.css'],
  
})
export class RecipeUpdateComponent implements OnInit {
  updatedRecipe: RecipeInterface = {} as RecipeInterface;
  recipe: RecipeInterface | null = null;
  recipeId: number | null = null;
  recipename: String|null=null;
  errorMessage: string | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeServiceService,
    private message: MessageService // Inject MessageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const recipeId = params.get('id');
      if (recipeId) {
        this.recipeId = parseInt(recipeId, 10);
        this.recipeService.getRecipeById(this.recipeId).subscribe({
          next: (data: RecipeInterface) => {
            this.recipe = data;
            this.updatedRecipe = { ...data };
          },
          error: (error: any) => {
            console.error('Error fetching recipe:', error);
          }
        });
      }
    });
  }

  triggerChanges(updatedRecipe: RecipeInterface): void {
    console.log('Changes detected:', updatedRecipe);
    localStorage.setItem('recipeid',this.recipeId == undefined ? "empty" : this.recipeId.toString()) 
    localStorage.setItem('recipename',this.updatedRecipe.name)
    console.log(this.updatedRecipe.name);  
    
  }

  addIngredient(): void {
    this.updatedRecipe.ingredients.push('');
    this.triggerChanges(this.updatedRecipe);
  }

  removeIngredient(index: number): void {
    this.updatedRecipe.ingredients.splice(index, 1);
    this.triggerChanges(this.updatedRecipe);
  }

  addStep(): void {
    this.updatedRecipe.steps.push('');
    this.triggerChanges(this.updatedRecipe);
  }

  removeStep(index: number): void {
    this.updatedRecipe.steps.splice(index, 1);
    this.triggerChanges(this.updatedRecipe);
  }

  onUpdateRecipe(): void {
    if (this.recipeId && this.updatedRecipe) {
      this.updatedRecipe.ingredients = Array.isArray(this.updatedRecipe.ingredients) ? this.updatedRecipe.ingredients : [this.updatedRecipe.ingredients];
      this.updatedRecipe.steps = Array.isArray(this.updatedRecipe.steps) ? this.updatedRecipe.steps : [this.updatedRecipe.steps];
      
      this.recipeService.updateRecipe(this.recipeId, this.updatedRecipe).subscribe({
        next: () => {
          localStorage.setItem('updatedRecipe', JSON.stringify(this.updatedRecipe.name));
          console.log(`Recipe with ID ${this.recipeId} updated successfully`);
          alert('Recipe updated successfully');
          
          
          this.router.navigate(['/recipe', this.recipeId]);
        },
        error: (error) => {
          console.error('Error updating recipe:', error);
          this.errorMessage = (error.status === 400 && error.error && error.error.errors) ? this.formatValidationErrors(error.error.errors) : 'An unexpected error occurred.';
          
        }
      });
    } else {
      console.error('Recipe ID or updated data missing.');
      alert('Failed to update recipe. Invalid request.');
    }
    this.triggerChanges(this.updatedRecipe);
  }

  private formatValidationErrors(errors: any): string {
    let errorMessage = 'Validation errors occurred:';
    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        errorMessage += `\n${key}: ${errors[key]}`;
      }
    }
    return errorMessage;
  }
  
  
}
