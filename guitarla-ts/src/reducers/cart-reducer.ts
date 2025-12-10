import { db } from "../data/db";
import { CartItem, Guitar } from "../types";

export type CartActions =
  | { type: "add-to-cart"; payload: { item: Guitar } }
  | { type: "remove-from-cart"; payload: { id: Guitar["id"] } }
  | { type: "decrease-quantity"; payload: { id: Guitar["id"] } }
  | { type: "increase-quantity"; payload: { id: Guitar["id"] } }
  | { type: "clear-cart" };

export type CartState = {
  data: Guitar[];
  cart: CartItem[];
};

export const initialState: CartState = {
  data: db,
  cart: [],
};

const MIN_ITEMS = 1;
const MAX_ITEMS = 5;

export const cartReducer = (
  state: CartState = initialState,
  action: CartActions
) => {
  if (action.type === "add-to-cart") {
    // console.log("Desde add-to-cart");

    // const itemExists = state.cart.findIndex(
    //   (guitar) => guitar.id === action.payload.item.id
    // );
    const itemExists = state.cart.find(
      (guitar) => guitar.id === action.payload.item.id
    );

    // console.log(itemExists);

    let updatedCart: CartItem[] = [];

    // if (itemExists >= 0) {
    if (itemExists) {
      // existe en el carrito
      // if (state.cart[itemExists].quantity >= MAX_ITEMS) return;

      // updatedCart = [...state.cart];

      // updatedCart[itemExists].quantity++;

      updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.item.id) {
          if (item.quantity < MAX_ITEMS) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
    } else {
      const newItem: CartItem = { ...action.payload.item, quantity: 1 };

      updatedCart = [...state.cart, newItem];
    }

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "remove-from-cart") {
    // setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));

    const updatedCart = state.cart.filter(
      (item) => item.id !== action.payload.id
    );

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "decrease-quantity") {
    const updatedCart = state.cart.map((item) => {
      if (item.id === action.payload.id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "increase-quantity") {
    const cart = state.cart.map((item) => {
      if (item.id === action.payload.id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    return {
      ...state,
      cart
    };
  }

  if (action.type === "clear-cart") {
    // setCart([]);

    return {
      ...state,
      cart: []
    };
  }
};
