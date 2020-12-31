import { Ingredient } from '../ingredient.model';
import { Action } from '@ngrx/store';
import * as ShoppingCartActions  from './shopping-cart.actions';

export interface State {
  ingredients: Ingredient[];
  editIngredientIndex: number;
  editIngredient: Ingredient;
}

export interface AppState {
  shoppingCart: State;
}


// LEFT OFF HERE course 354 ngrx

const initialState: State = {
  ingredients: [] = [
    new Ingredient("orange", "5"),
    new Ingredient("apple", "10")],
  editIngredientIndex: -1,
  editIngredient: null
}

export function shoppingCartReducer(
  state: State = initialState,
  action: ShoppingCartActions.ShoppingCartActions
) {
  switch (action.type) {
    case ShoppingCartActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      }
    case ShoppingCartActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, igIndex) => { return igIndex !== action.payload })
      }
    case ShoppingCartActions.UPDATE_INGREDIENT:
      console.log('ngrx UPDATE_ingredient, action.payload: ', action.payload);
      let scIngredients = [...state.ingredients];
      scIngredients[action.payload.itemIndex] = action.payload.ingredient;
      return {
        ...state,
        ingredients: scIngredients
      }
    case ShoppingCartActions.EDIT_INGREDIENT:
      console.log('ngrx EDIT_ingredient, action.payload: ', action.payload);
      let editIngredients = [...state.ingredients];
      let editIngredient = editIngredients[action.payload]
      return {
        ...state,
        editIngredientIndex: action.payload,
        editIngredient: editIngredient
      }
    default:
      return state;
  }
  
}
