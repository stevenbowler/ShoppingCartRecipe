import {Ingredient} from '../shopping-cart/ingredient.model'

export class Recipe {
  constructor(
    public name: string,
    public ingredients: Ingredient[],
    public instructions?: string,
    public prepTime?: string,
    public cookTime?: string,
    public cookMethod?: string,
    public imageURL?: string
  ) { }
}
