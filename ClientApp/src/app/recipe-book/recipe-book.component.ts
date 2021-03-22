import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shopping-cart/ingredient.model';

 
@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.css']

})
export class RecipeBookComponent {
  public recipes: Recipe[] = [
    new Recipe("Apple Pie", [new Ingredient("apple", "5", "tbsp"), new Ingredient("flour", "1", "cup")],"do this"),
    new Recipe("Cheese Cake", [new Ingredient("cheese", "5", "oz."), new Ingredient("flour", "1.5", "cup")],"don't do this")];
}


