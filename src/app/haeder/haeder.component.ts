import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-haeder',
  templateUrl: './haeder.component.html',
  styleUrls: ['./haeder.component.css']
})
export class HaederComponent implements OnInit {
  
  recipeCount: number = 0;
  constructor(private activatedRoute:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    
  }

  
  
 

}
