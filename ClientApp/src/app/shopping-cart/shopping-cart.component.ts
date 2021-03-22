import { Component, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from './ingredient.model';
import { Store } from '@ngrx/store';
import * as shoppingCartActions from './store/shopping-cart.actions';
import * as fromShoppingList from './store/shopping-cart.reducer';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.css']
})
export class ShoppingCartComponent {

  public editMode: boolean = false;
  public itemIndex: number;
  public ingredient: string = "";
  public contents: string = "";
  ingredients: Observable<{
    ingredients: Ingredient[],
    editIngredientIndex: number,
    editIngredient: Ingredient
  }>;

  constructor(private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingCart');
    this.ingredients.subscribe(stateObj => {
      console.log("stateObj: ", stateObj, stateObj.ingredients[this.itemIndex]);
    });
  }

  public onAddIngredient() {
    const newIngredient = new Ingredient(this.ingredient, this.contents);
    this.store.dispatch(new shoppingCartActions.AddIngredient(newIngredient));
    this.ingredient = "";
    this.contents = "";
  }

  public onDeleteIngredient(itemIndex) {
    this.store.dispatch(new shoppingCartActions.DeleteIngredient(itemIndex));
  }

  public onEditIngredient(itemIndex) {
    this.editMode = true;
    this.store.dispatch(new shoppingCartActions.EditIngredient(itemIndex));
    this.ingredients.subscribe(stateObj => {
      if (itemIndex <= stateObj.editIngredientIndex) {      // delete last row and can't access stateObj...name etc
        this.ingredient = stateObj.ingredients[itemIndex].name;
        this.contents = stateObj.ingredients[itemIndex].contents;
        this.itemIndex = stateObj.editIngredientIndex;
      }
    });
  }

  public onUpdateIngredient(itemIndex) {
    const newIngredient = new Ingredient(this.ingredient, this.contents);
    const newEntry = { itemIndex: this.itemIndex, ingredient: newIngredient }
    this.store.dispatch(new shoppingCartActions.UpdateIngredient(newEntry));
    this.ingredient = "";
    this.contents = "";
    this.editMode = false;
  }

}
