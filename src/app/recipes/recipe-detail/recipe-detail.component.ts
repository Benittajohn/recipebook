import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeServiceService } from '../../service/recipe-service.service';
import { RecipeInterface } from '../recipe-interface';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  


  selectedRecipe: RecipeInterface | null = null;
  
  recipeDeleted: boolean = false;
 
 
  recipe:RecipeInterface|null=null;
  
  
  constructor(private route:ActivatedRoute,private recipeservice:RecipeServiceService,private router:Router){}

  
  
  ngOnInit():void{
    
    
    this.route.paramMap.subscribe(params => {
      const recipeName = params.get('name');
      
      if (recipeName) {
       
        
        this.recipeservice.GetRecipe().subscribe((data: RecipeInterface[])=>{
          
            
            this.recipe = data.find(recipe => recipe.name === recipeName) || null;
           
            console.log('Recipe fetched:', this.recipe);
            

           
          });
          // error: (error: any) => {
          //   console.error('Error fetching recipes:', error);
          // }
        }
        });
    }
    
 
 getRecipeData() {
  return this.recipe;
}
 
 deleteRecipe(recipeId: number): void {
  this.recipeservice.deleteRecipe(recipeId).subscribe({
    next: () => {
      console.log(`Recipe with ID ${recipeId} deleted successfully`);
      alert('Recipe deleted successfully');
      this.router.navigate(['/']);
    },
    error: (error) => {
      console.error('Error deleting recipe:', error);
    }
  });
}

goToUpdatePage(recipeId: number): void {
  this.router.navigate(['/recipe', recipeId, 'update']);
}

// onSelectRecipe(recipe: RecipeInterface): void {
//   this.selectedRecipe = recipe;
//   this.recipeSelected.emit(recipe);
// }

// selectRecipe(recipe: RecipeInterface): void {
//   this.recipeSelected.emit(recipe);
// }


}

  
