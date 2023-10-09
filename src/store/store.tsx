import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; // Import the reducer from your todoSlice

// Configure the Redux store
export const store = configureStore({
  reducer: todoReducer, // Set the root reducer for the store to your todoReducer
});

// Define a type RootState which represents the type of the Redux store's state
export type RootState = ReturnType<typeof store.getState>;
