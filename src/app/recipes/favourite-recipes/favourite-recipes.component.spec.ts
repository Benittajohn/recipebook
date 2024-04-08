/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavouriteRecipesComponent } from './favourite-recipes.component';

describe('FavouriteRecipesComponent', () => {
  let component: FavouriteRecipesComponent;
  let fixture: ComponentFixture<FavouriteRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
