import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  enteredSearchValue:string='';

  @Output() 
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>();
   
  onsearchTextChanged()
  {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
