import { CartItem, Guitar } from "../types";

export type CartActions =
  { type: 'add-to-cart', payload: { item: Guitar } } |
  { type: 'remove-from-cart', payload: { id: Guitar['id'] } } |
  { type: 'add-to-cart', payload: { id: Guitar['id'] } |
  { type: 'add-to-cart', payload: { id: Guitar['id'] } |
  { type: 'clear-cart' };

export type CartState = {
  data: Guitar[]
  cart: CartItem[]
};

export const initialState: CartState = {
  data: db,
  cart: []
};