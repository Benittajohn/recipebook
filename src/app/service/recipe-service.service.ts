import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeInterface } from '../recipes/recipe-interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService implements OnInit {
  
  private apiUrl = 'https://localhost:7020/api/Recipe'; 
  errorMessage: string = '';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }
  
  getRecipeById(id: number): Observable<RecipeInterface> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<RecipeInterface>(url);
  }

  GetRecipe(): Observable<RecipeInterface[]> {
       return this.http.get<RecipeInterface[]>(this.apiUrl);
    
  }

  deleteRecipe(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateRecipe(id:number,updatedRecipe: RecipeInterface): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<void>(url, updatedRecipe);
  }

  addRecipe(newRecipe: RecipeInterface): Observable<void> {
    const url = `${this.apiUrl}`; 
    return this.http.post<void>(url, newRecipe); 
  }
}
