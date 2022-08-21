import {createSlice} from '@reduxjs/toolkit';

import type {PayloadAction} from '@reduxjs/toolkit'

export interface PizzaState {
  toppings: string[] // 配料
  gluten: boolean // 有無麩質
}

const initialState: PizzaState = {
  toppings: ['pepperoni', 'sausage', 'onion', 'mushroom', 'olive', 'jalapeno', 'tomato', 'basil', 'anchovy', 'pineapple', 'bacon'],
  gluten: true
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    toggleGluten: (state) => {
      state.gluten = !state.gluten
    },
    addTopping: (state, {payload}: PayloadAction<string>) => {
      state.toppings = [...state.toppings, payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const {toggleGluten, addTopping} = pizzaSlice.actions

export default pizzaSlice.reducer