import { Component, Input, OnInit } from '@angular/core';
import { RecipeInterface } from '../recipe-interface';
import { ActivatedRoute,Router } from '@angular/router';
import { RecipeServiceService } from '../../service/recipe-service.service';
import { HttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})



export class RecipeListComponent implements OnInit {

  VegNonveg=1;
  recipeType='';
  recipes: Array<RecipeInterface> | undefined  ;
  currentPage = 1;
  itemsPerPage = 9;
  


  constructor(private route:ActivatedRoute,private recipe:RecipeServiceService){}
  ngOnInit():void{

    
     const currentUrl = this.route.snapshot.url.toString();
    

    this.VegNonveg = currentUrl.includes('recipe-veg') ? 2 : 1;
    
    this.recipe.GetRecipe().subscribe(
       {
      
      next:(data:RecipeInterface[]) => { 
        if(this.VegNonveg){
        this.recipes = data.filter(recipe => recipe.vegNonveg === this.VegNonveg);
        console.log(this.recipes);
        console.log(data);
        }
        
      
      },
    
      error: error => {
        
        console.log(error);
      },
      complete: () => {
        
      }
    });
  }

  get totalPages(): number {
    return Math.ceil((this.recipes?.length || 0) / this.itemsPerPage);
  }


  onPageChange(page: number): void {
    this.currentPage = page;
  }

  get paginatedRecipes(): RecipeInterface[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.recipes?.slice(startIndex, endIndex) || [];
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }

  }
}
    
    
      
      
    
  
