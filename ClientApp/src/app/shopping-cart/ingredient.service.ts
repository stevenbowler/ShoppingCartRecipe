import {Ingredient} from './ingredient.model'

export class IngredientService {
  public ingredients: Ingredient[] = [
      new Ingredient("orange", "5"),
      new Ingredient("apple", "10")];
  

  constructor() {
  
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
