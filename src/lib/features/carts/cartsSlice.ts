import { compareArrays } from "@/lib/utils";
import { Discount } from "@/types/product.types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const calcAdjustedTotalPrice = (
  totalPrice: number,
  data: CartItem,
  quantity?: number
): number => {
  return (
    (data.discount.percentage > 0
      ? Math.round(data.price - (data.price * data.discount.percentage) / 100)
      : data.discount.amount > 0
        ? Math.round(data.price - data.discount.amount)
        : data.price) * (quantity ? quantity : data.quantity)
  );
};

export type RemoveCartItem = {
  id: number;
  attributes: string[];
};

export type CartItem = {
  id: number;
  name: string;
  srcUrl: string;
  price: number;
  attributes: string[];
  discount: Discount;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  totalQuantities: number;
};

// Define a type for the slice state
interface CartsState {
  cart: Cart | null;
  totalPrice: number;
  adjustedTotalPrice: number;
  action: "update" | "add" | "delete" | null;
}

// Define the initial state using that type
const initialState: CartsState = {
  cart: null,
  totalPrice: 0,
  adjustedTotalPrice: 0,
  action: null,
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      if (!state.cart) {
        state.cart = {
          items: [action.payload],
          totalQuantities: action.payload.quantity,
        };
      } else {
        const isItemInCart = state.cart.items.find(
          (item) =>
            item.id === action.payload.id &&
            compareArrays(item.attributes, action.payload.attributes)
        );

        if (isItemInCart) {
          state.cart.items = state.cart.items.map((eachCartItem) =>
            eachCartItem.id === action.payload.id &&
              compareArrays(eachCartItem.attributes, action.payload.attributes)
              ? { ...eachCartItem, quantity: eachCartItem.quantity + action.payload.quantity }
              : eachCartItem
          );
        } else {
          state.cart.items.push(action.payload);
        }
        state.cart.totalQuantities += action.payload.quantity;
      }

      state.totalPrice += action.payload.price * action.payload.quantity;
      state.adjustedTotalPrice += calcAdjustedTotalPrice(state.totalPrice, action.payload);
    },
    removeCartItem: (state, action: PayloadAction<RemoveCartItem>) => {
      if (!state.cart) return;

      state.cart.items = state.cart.items
        .map((eachCartItem) =>
          eachCartItem.id === action.payload.id &&
            compareArrays(eachCartItem.attributes, action.payload.attributes)
            ? { ...eachCartItem, quantity: eachCartItem.quantity - 1 }
            : eachCartItem
        )
        .filter((item) => item.quantity > 0);

      state.cart.totalQuantities -= 1;
      state.totalPrice -= state.cart.items.find(
        (item) =>
          item.id === action.payload.id &&
          compareArrays(item.attributes, action.payload.attributes)
      )?.price || 0;

      state.adjustedTotalPrice = state.cart.items.reduce(
        (total, item) => total + calcAdjustedTotalPrice(0, item, item.quantity),
        0
      );
    },
    remove: (state, action: PayloadAction<RemoveCartItem & { quantity: number }>) => {
      if (!state.cart) return;

      state.cart.items = state.cart.items.filter(
        (item) =>
          item.id !== action.payload.id ||
          !compareArrays(item.attributes, action.payload.attributes)
      );

      state.cart.totalQuantities -= action.payload.quantity;
      state.totalPrice -=
        action.payload.quantity *
        (state.cart.items.find(
          (item) =>
            item.id === action.payload.id &&
            compareArrays(item.attributes, action.payload.attributes)
        )?.price || 0);

      state.adjustedTotalPrice = state.cart.items.reduce(
        (total, item) => total + calcAdjustedTotalPrice(0, item, item.quantity),
        0
      );
    },
  },
});

export const { addToCart, removeCartItem, remove } = cartsSlice.actions;
export default cartsSlice.reducer;
