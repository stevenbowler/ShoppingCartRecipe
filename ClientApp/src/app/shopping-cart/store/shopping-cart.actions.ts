import { Action } from '@ngrx/store';
import { Ingredient } from '../ingredient.model';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const EDIT_INGREDIENT = 'EDIT_INGREDIENT';


export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  constructor(public payload: Ingredient) { };
}

export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;
  constructor(public payload: number) { };
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;
  constructor(public payload: { itemIndex: number, ingredient: Ingredient }) { };
}

export class EditIngredient implements Action {
  readonly type = EDIT_INGREDIENT;
  constructor(public payload: number) { };
}

export type ShoppingCartActions =
  AddIngredient |
  DeleteIngredient |
  UpdateIngredient |
  EditIngredient;
