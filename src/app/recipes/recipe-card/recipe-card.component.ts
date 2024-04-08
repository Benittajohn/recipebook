import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RecipeInterface } from '../recipe-interface';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent implements OnInit , OnChanges {

  @Input() recipe!: RecipeInterface;
  router: any;
  notificationCount: number=0;
  
  favorites: any[] = [];
  

  toggleFavorite(recipe: any) {
    const index = this.favorites.findIndex(favorite => favorite.name === recipe.name);
    if (index === -1) {
      this.favorites.push(recipe);
    } else {
      this.favorites.splice(index, 1);
    }
  }

  isFavorite(recipe: any): boolean {
    return this.favorites.some(favorite => favorite.name === recipe.name);
  }

  constructor() {
    console.log(this.recipe); 
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnInit(): void {
    console.log(this.recipe)
    this.checkForNotification();
    console.log(this.favorites);
  }

  checkForNotification(): void {
    const updatedRecipe = localStorage.getItem('recipename');
    if (updatedRecipe && updatedRecipe === this.recipe.name) {
      
      this.notificationCount=1;
      localStorage.removeItem('updatedRecipe'); 
    }
  }

  removeRecipeFromLocalStorage(): void {
    localStorage.removeItem('updatedRecipe');
    this.notificationCount = 0;
  }

 
  }