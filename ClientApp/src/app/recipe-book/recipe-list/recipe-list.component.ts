import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shopping-cart/ingredient.model';
 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeBookComponent {
  public recipes: Recipe[] = [
    new Recipe("Apple Pie", [new Ingredient( "apple", "5", "tbsp"), new Ingredient("flour", "1", "cup")]),
    new Recipe("Cheese Cake", [new Ingredient("cheese", "5", "oz."), new Ingredient("flour", "1.5", "cup")])];
  }

