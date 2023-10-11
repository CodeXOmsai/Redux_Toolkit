import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import { rootSaga } from '../Saga/saga'; 
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();


// Configure the Redux store
export const store = configureStore({
  reducer: todoReducer, // Set the root reducer for the store to your todoReducer
  middleware: [sagaMiddleware], // Add the saga middleware to the store
});

sagaMiddleware.run(rootSaga); // Run the root Saga

// Define a type RootState which represents the type of the Redux store's state
export type RootState = ReturnType<typeof store.getState>;
