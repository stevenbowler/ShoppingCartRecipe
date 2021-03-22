import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../ingredient.model';
import * as fromShoppingList from '../store/shopping-cart.reducer';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.css']
})
export class ShoppingCartListComponent {
  @Input() public name: string = "";
  @Input() public contents: string = "";
  @Input() public i: number;
  @Output() public deleteIngredient= new EventEmitter<number>();
  @Output() public editIngredient = new EventEmitter<number>();

  public editMode: boolean = false;
  ingredients: Observable<{
    ingredients: Ingredient[],
    editIngredientIndex: number,
    editIngredient: Ingredient
  }>;

  constructor(private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingCart');
    this.ingredients.subscribe(stateObj => {
      if (stateObj.editIngredientIndex < 0) this.editMode = false;
      else this.editMode = true;
    });
    console.log('shopping-cart-list this.editIngredientItem', this.editMode);
  }


  public onDeleteIngredient(itemIndex) {
    //this.ingredients.splice(itemIndex, 1);
    console.log("called prop i with value: ", itemIndex);
    this.deleteIngredient.emit(itemIndex);
  }

  public onEditIngredient(itemIndex) {
    //this.ingredients.splice(itemIndex, 1);
    console.log("called prop i with value: ", itemIndex);
    this.editIngredient.emit(itemIndex);
  }
}
