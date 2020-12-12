import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html'
})
export class ShoppingCartListComponent {
  @Input() public name: string = "";
  @Input() public contents: string = "";
  @Input() public i: number;
  @Output() public deleteIngredient= new EventEmitter<number>();

  public onDeleteIngredient(itemIndex) {
    //this.ingredients.splice(itemIndex, 1);
    console.log("called prop i with value: ", itemIndex);
    this.deleteIngredient.emit(itemIndex);
  }
}
