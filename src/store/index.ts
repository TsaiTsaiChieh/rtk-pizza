import {configureStore} from '@reduxjs/toolkit'

import pizzaReducer from './reducers/pizzaSlice'

export const store = configureStore({
  // will register any reducers defined elsewhere
  reducer: {
    pizza: pizzaReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
