import { Component } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent {
  public ingredient: string = "";
  public contents: string = "";
  public ingredients: Ingredient[] = [
    new Ingredient("tomatoes", "11"),
    new Ingredient("onions", "15")
  ];

  public onAddIngredient() {
    this.ingredients.push({ name: this.ingredient, contents: this.contents });
    this.ingredient = "";
    this.contents = "";
  }

  public onDeleteIngredient(itemIndex) {
    this.ingredients.splice(itemIndex, 1);
  }
}
