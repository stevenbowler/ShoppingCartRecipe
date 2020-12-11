import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
 
@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html'
})
export class RecipeBookComponent {
  public recipes: Recipe[] = [
    new Recipe("eggs", "5"),
    new Recipe("milk", "2")];


  }

