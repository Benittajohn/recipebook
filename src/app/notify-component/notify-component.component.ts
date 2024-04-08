import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-notify-component',
  templateUrl: './notify-component.component.html',
  styleUrls: ['./notify-component.component.css']
})
export class NotifyComponentComponent implements OnInit {
  
  recipeName : string | null = null;
  
 

  

  constructor() { }

  ngOnInit(): void {
    this.recipeName = localStorage.getItem('recipename');
    // console.log(this.recipeName);
    //this.updateRecipeList();
   
    localStorage.removeItem('recipename');
    
  }

  

  
    
}
