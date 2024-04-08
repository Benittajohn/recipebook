import { Component, OnInit } from '@angular/core';
import { RecipeInterface } from '../recipes/recipe-interface';
import { RecipeServiceService } from '../service/recipe-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {
  
  constructor(private router: Router,){}
  ngOnInit(): void {
    
  }
  
  addNewRecipe()
  {
    this.router.navigate(['/create-recipe']);
  }
  
}
      
    
  
